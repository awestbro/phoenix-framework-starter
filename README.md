Phoenix Framework Starter
=========================

My favorite mixture of tools to build sites fast! 

## Why?

I make a lot of side projects. This repo serves as a starting point for creating awesome web applications fast. Also I *really* hate setting up webpack configs for every new project I make 😄

Whats inside?

  * [Elixir](https://elixir-lang.org/)
  * [Phoenix](https://www.phoenixframework.org/)
  * [Typescript](https://www.typescriptlang.org/)
  * [Turbolinks](https://github.com/turbolinks/turbolinks)
  * [Stimulus](https://stimulusjs.org/)
  * [Bootstrap](https://getbootstrap.com/)

This repo distills a lot of what I learned building [Ulluminate](https://ulluminate.com/) and makes it the default for my projects going forward.

### *Awesome* applications?

I've had a lot of experience building web applications. From Ruby on Rails to full React SPAs and everything in between (including an XSLT based web framework 🤐). The sites I build now typically have the same requirements:

- Server side rendering
- Easily add javascript interaction to a page
- Quickly prototype new features

This combination of tools lets me accomplish all the above goals and be more productive day-to-day.

If you like this repo, keep up with me at [my personal blog](https://aaronwestbrook.com) for more Elixir news!

---

## TODOS:

- [x] Add Typescript Support
- [x] Add Turbolinks Support
- [x] Add Stimulus Support
- [x] Add Bootstrap Support
- [ ] Replace phx.gen templates with Bootstrap friendly versions
- [ ] Form submission example

---

## Make it your own!

To make this app your own, do a case-sensitive find/ replace in this folder for Myapp => NewAppName and myapp => newappname. You will also have to replace two folder structures under lib/myapp* and test/myapp*

## Installation

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.setup`
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](https://hexdocs.pm/phoenix/deployment.html).

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: https://hexdocs.pm/phoenix/overview.html
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix

## Prior Art

Similar to my other project: [Phoenix Starter](https://github.com/awestbro/phoenix-starter), but without all of the user authentication and emailer bits. I also traded Bulma for Bootstrap because there are so many free resources available.