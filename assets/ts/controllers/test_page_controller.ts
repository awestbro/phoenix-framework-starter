import { Controller } from "stimulus";

// Adding interactive page elements via stimulus controller
export default class extends Controller {
    connect() {
        $('#example-popover').popover({
            container: 'body',
        });
    }
}