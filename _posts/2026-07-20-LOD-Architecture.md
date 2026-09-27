---
layout: post
title: Implementing LOD and Architectural Explorations
image: /media/Rover.png
tags:
  - Development
pinned: false
---

# The Evolution of ThunderEngine: Implementing LOD and Architectural Explorations

## Introduction

Game engine development is a constant search for balance between convenience, performance, and ease of maintenance. In this article, I'll talk about how LOD support for geometry came to be in ThunderEngine. It's a story about how architectural decisions are born — from the first ideas to a working implementation.

## Part 1. Understanding LOD

### What Is LOD

LOD (Level of Detail) is the level of geometric detail. The technology is needed to optimize rendering speed: objects in the distance are drawn with simpler geometry. Major engines like Unity, Godot, and UE5 (when Nanite isn't in use) can reduce detail for distant objects.

Remember the janky models in Cyberpunk 2077 at launch? That was it — except due to a bug in load priorities, Red Engine loaded the wrong LOD into the foreground.

### How to Determine the Needed LOD

This question had been nagging me for a long time. At first I thought it was simply based on distance to the camera, but it's a bit more complicated than that. It turns out the size of the object itself must also be taken into account: a large object far away should reduce its geometry more slowly compared to small ones.

Obviously, the check needs to run very fast — there can be many such objects in a scene, and they need to be checked frequently.

### My Solution

At first I wanted to somehow take the AABBox (axis-aligned bounding box) into account. But it turned out to be simpler than that. It's enough to project just two points onto the screen (the center of the sphere and a point on its surface) to estimate the object's size:

1. Two vector-matrix multiplications
2. Computing the distance between those two points

This gives a percentage of how much vertical screen space the object occupies — enough to roughly estimate the required LOD level.

I haven't implemented the actual LOD switching yet — that requires making a couple more architectural decisions. But a big step has been taken toward proper LOD support in the engine.

## Part 2. Architectural Decisions: Finding the Right Path

So, what architectural decisions need to be made for LOD to finally appear in the engine? I studied how LOD is represented in other engines, and two directions emerge — both of which, in my view, are a bit crooked.

### The Unity Way: LOD Group + Separate MeshRenderer

There's a special LOD Group component that manages switching between levels of detail. The Mesh class in Unity knows nothing about LOD — it deals purely with geometry. LOD is a layer on top; we simply switch the available meshes with different levels of detail depending on the object's size on screen.

**Pros:**
- No need to extend the Mesh structure
- You can configure separate materials, shadows, etc. for each LOD

**Cons:**
- Requires a separate MeshRenderer for each LOD
- Requires an additional LOD Group component that manages the visibility of a pool of renderers

### The Unreal Engine Way: LOD Inside Mesh

Here, LODs are stored directly in the Mesh.

**Pros:**
- LOD levels can be added right at mesh import
- Streaming of levels can be organized through a reference system
- One MeshRender is enough, rather than a whole caravan

**Cons:**
- The Mesh class structure becomes much more complex
- Streaming will make it even more complex
- Greater restrictions on materials — you can't swap them dynamically per level

That said, in Unreal, materials do have LOD functionality that lets you reduce not only texture quality but also the complexity of vertex/fragment shaders.

### What's Closer to Me

Personally, I like the minimalism of Unity's approach in engines. But the prospect of dragging around a separate MeshRenderer with a set of components for each LOD is something I categorically dislike — too many entities that need to be synchronized.

## Part 3. The Third Way: An Elegant Solution via GUID

A little over two weeks passed. The whole time, the idea was simmering in my head, and finally a solution took shape that I'm eager to share.

I've hit upon a third way that elegantly bypasses the limitations of Unity and UE. I suspect it may already be used in large engines. The essence is simple: **encode the LOD number into the resource's internal name**.

### How It Works

All resources in the project get unique 128-bit identifiers (GUIDs). This helps track renames and file moves. When a file is converted into the internal format, it's assigned this GUID as its name. You can view the GUID in a companion file with the `.set` suffix.

All references to resources (in maps, prefabs, materials, etc.) are represented as GUIDs.

What if we stored a little more information in the GUID? — I thought. For example, the LOD number. Then:

- No need to modify the Mesh class
- You can create several mesh resources with the same GUID but different LODs in the name
- MeshRender itself decides which LOD to load at any given moment

### The Possibilities This Opens Up

The solution turns out to be super elegant. Moreover, something similar can be done with textures — storing MIP levels in separate files. This paves the way for:

- Resource streaming — dynamically loading the needed levels of detail
- Storing high-detail versions in a separate archive
- Downloading from the network when needed

The possibilities are endless!

### Implementation Details

```
{11233333-3333-3333-3333-333333333333}
```

Where:
- **11** (the first two characters) — a number from 1 to 255 denoting the resource type (Mesh, Texture, etc.)
- **2** (the next character) — a number from 0 to 15 denoting the resource's LOD
- The rest — a fully random value (for now)

## Part 4. LOD for Geometry Is Here

A new day — a new feature. Today, as promised, I'm talking about what I've been working on lately. The video demonstrates LOD (Level of Detail) for geometry in action.

### What LOD Is and Why It's Needed

This technology has been used in games since time immemorial. It lets you reduce the number of triangles drawn for objects in a scene, thereby boosting FPS in your games. Even in the era of powerful GPUs, LOD is actively used by developers — and will continue to be.

### My Goal: Ease of Use

I have a basic implementation so far, but even getting to it took quite a while. I wanted to make it as simple as possible for inexperienced developers.

Unity provides a rather convoluted pipeline with visibility switching across multiple objects. Inconvenient. Unreal is a bit simpler, but the Mesh structure there is also quite tangled. I was looking for a solution between the two — and I think I found it.

## Conclusion

Work on ThunderEngine continues. LOD for geometry is in a working state, and the architecture keeps evolving. Stay tuned and share your thoughts — feedback helps make the engine better.
