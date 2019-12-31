import * as Turbolinks from "turbolinks";
import * as $ from "jquery";

export function csrfToken() {
    return $('meta[name=csrf-token]').attr('content');
};
  
export function googleAnalyticsToken() {
    return $('meta[name=gtag_token]').attr('content');
};
  

// Handle form submissions redirects with turbolinks
// This allows you to not put data-remote: "true" on forms
export function bindFormSubmissionsByDefault() {
    $(document).on("submit", "form:not(.turbolinks-disabled)", function(event) {
        event.preventDefault();
        
        const form = $(this);
        const action = form.attr("action");
        const method = form.attr("method");
        const data = form.serialize();
        const referrer = location.href;
        
        if (method == "get") {
            return Turbolinks.visit(`${action}?${data}`);
        }
        
        const headers: any = {"Turbolinks-Referrer": referrer};
        const token = csrfToken();
        if (token) {
            headers['X-CSRF-Token'] = token;
        }
        
        const options = { method, data, headers };
        
        $.ajax(action, options).then((data, status, jqXHR) => {
            if (jqXHR.getResponseHeader('content-type').match(/javascript/)) {
                eval(data);
            } else {
                const snapshot = Turbolinks.Snapshot.wrap(data);
                Turbolinks.controller.cache.put(referrer, snapshot);
                Turbolinks.visit(referrer, { action: "restore" });
            }
        });
    });
}

declare var gtag: any;

export function bindGoogleAnalyticsPageVisitsFromTurbolinks() {
    document.addEventListener('turbolinks:load', function(event: any){
        if (typeof(gtag) == 'function') {
            gtag('config', googleAnalyticsToken(), {
            'page_title' : event.target.title,
            'page_path': event.data.url.replace(window.location.protocol + "//" + window.location.hostname, "")
            });
        }
    });  
}