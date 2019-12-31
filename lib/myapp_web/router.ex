defmodule MyappWeb.Router do
  use MyappWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", MyappWeb do
    pipe_through :browser

    get "/", PageController, :index
    get "/test", PageController, :test
  end

  # Other scopes may use custom stacks.
  # scope "/api", MyappWeb do
  #   pipe_through :api
  # end
end
