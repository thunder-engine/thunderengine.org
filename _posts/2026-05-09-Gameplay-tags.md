---
layout: post
title: Gameplay Tags, Groups, and Dynamic Properties
image: /media/Crates.png
tags:
  - Development
pinned: false
---
A couple of months ago, someone asked me: "Does Thunder Engine have Gameplay Tags like Unreal Engine?" I hadn't heard of such a feature. I decided to look into what kind of beast it was, and also checked Unity and Godot on the matter. That's how the journey toward a tag and group system began — the one I'll talk about in this article.

## What Gameplay Tags Are in Unreal Engine

If you're not familiar — they're hierarchical tags that can be assigned to any component. They help you quickly check whether a component belongs to a particular group.

Roughly speaking: with the tag Effect.Poison on a component, you can quickly check:

- Does the component have any Effect at all?
- Or specifically, is the Poison effect on it?

Seems convenient (though I have doubts about using tags in their Ability System).

## What About Other Engines

- **Unity** — has a tag system, but it's less functional
- **Godot** — took a different path: they have groups and metadata

At first I looked at metadata. And then it hit me: this is essentially the equivalent of my dynamic properties!

## Dynamic Properties in Thunder Engine (Already There)

In Thunder Engine, you can assign any property to any component or actor, even if the object doesn't have that property. It's done via setProperty(name, value), where value can be virtually any type.

You can get the value back via property(name) — the object returns a value with the Variant type, which you can convert to the type you need:
cpp

property("health").toInt()

I use dynamic properties all the time. But there were still no groups.

## Now Let's Deal with Groups

I've set aside tag hierarchy for now — they'll be flat. Calling a method from a group — I'm not planning that yet either.

### Why Groups Are Needed Right Now

For more convenient management of components within systems. For example:

- To build shadow maps, you need to quickly filter all light sources
- Or call methods to simulate game logic

There are hundreds of uses.

## The New API

Now the component has two methods:
cpp

/*!
    Adds a \a tag for current component.
    Automatically adds component to specific Scene group.
*/
void Component::addTag(const TString &tag)

/*!
    Removes a \a tag for current component.
    Automatically removes component from specific Scene group.
*/
void Component::removeTag(const TString &tag)

And in Scene, there are methods for working with groups by strings and by hashes:
cpp

void Scene::addToGroup(Object *object, const TString &group)
void Scene::addToGroupByHash(Object *object, uint32_t hash)

void Scene::removeFromGroup(Object *object, const TString &group)
void Scene::removeFromGroupByHash(Object *object, uint32_t hash)

Object::ObjectList &Scene::getObjectsInGroup(const TString &group)
Object::ObjectList &Scene::getObjectsInGroupByHash(uint32_t hash)

## How It Works Under the Hood

- addTag("Enemy") automatically adds the component to the "Enemy" group in Scene
- removeTag("Enemy") — removes it from the group
- Inside, groups are stored by string hashes (hashing via Mathf::hashString) for fast access
- All operations are thread-safe (there's a mutex)

Everything is simple, flexible, and not tied to any specific systems. Previously you'd have to dig into the system's code and add the group manually. Now a single tag is enough!