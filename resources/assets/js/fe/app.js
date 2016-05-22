getCsrfToken = function () {
    return document.querySelector('meta[name="csrf-token"]').getAttribute('content');
};

getCurrentUrl = function () {
    return window.location.origin + window.location.pathname;
};

window.addEventListener('load', function () {
    var editor;

    // Initialize editor
    editor = ContentTools.EditorApp.get();
    editor.init('*[data-editable]', 'data-name');

    // Register editor save event
    editor.addEventListener('saved', function (ev) {
        var name, onStateChange, passive, payload, regions, xhr;

        // Check if this was a passive save
        passive = ev.detail().passive;

        // Check to see if there are any changes to save
        regions = ev.detail().regions;
        if (Object.keys(regions).length == 0) {
            return;
        }

        // Set the editors state to busy while we save our changes
        this.busy(true);

        // Collect the contents of each region into a FormData instance
        payload = new FormData();
        for (name in regions) {
            if (regions.hasOwnProperty(name)) {
                payload.append(name, regions[name]);
            }
        }

        // Send the update content to the server to be saved
        onStateChange = function (ev) {
            // Check if the request is finished
            if (ev.target.readyState == 4) {
                editor.busy(false);
                if (ev.target.status == '200') {
                    // Save was successful, notify the user with a flash
                    if (!passive) {
                        new ContentTools.FlashUI('ok');
                    }
                } else {
                    // Save failed, notify the user with a flash
                    new ContentTools.FlashUI('no');
                }
            }
        };

        xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', onStateChange);
        xhr.open('PUT', getCurrentUrl());
        xhr.setRequestHeader('X-CSRF-TOKEN', getCsrfToken());
        xhr.send(payload);
    });

    /*
    // Add support for auto-save
    editor.addEventListener('start', function (ev) {
        var _this = this;

        // Call save every 30 seconds
        function autoSave() {
            _this.save(true);
        };
        this.autoSaveTimer = setInterval(autoSave, 30 * 1000);
    });

    editor.addEventListener('stop', function (ev) {
        // Stop the autosave
        clearInterval(this.autoSaveTimer);
    });
    */
});
