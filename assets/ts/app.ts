import "../scss/app.scss";
import "jquery-ujs";
import "bootstrap";
import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";
import * as Turbolinks from "turbolinks";
import { bindTurbolinksFormSubmissionsByDefault } from "./util";

const application = Application.start();
const context = require.context("./controllers", true, /\.ts$/);
application.load(definitionsFromContext(context));

bindTurbolinksFormSubmissionsByDefault();

Turbolinks.start();

console.log('Hi from typescript!');
