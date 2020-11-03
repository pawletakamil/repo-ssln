class TD {
    constructor() {
        this.is_local = window.location.hostname == "localhost" ? true : false;
        this.tinymce();
    }

    get state() {
        return {
            ready: e => {},
            load: e => {

            }
        }
    }

    tinymce() {
        if ('undefined' === typeof (tinymce)) {
            return this;
        }
        tinymce.create('tinymce.plugins.shortcodes', {
            init: function (editor, url) {
                editor.addButton('shortcodes', {
                    text: 'Shortcodes',
                    icon: false,
                    type: 'menubutton',
                    menu: [
                        {
                            text: 'Button',
                            onclick: function () {
                                const content = editor.selection.getContent() ? editor.selection.getContent() : 'Button text';
                                editor.selection.setContent(`[button url="{ PUT URL HERE }" title="${content}" target="_blank/_self"]`);
                            }
                        },
                        {
                            text: 'Slider',
                            onclick: function () {
                                const content = editor.selection.getContent() ? editor.selection.getContent() : 'Slider ID';
                                editor.selection.setContent(`[slider id="${content}"]`);
                            }
                        },
                        {
                            text: 'Article embed',
                            onclick: function () {
                                const content = editor.selection.getContent() ? editor.selection.getContent() : "Post ID";
                                editor.selection.setContent(`[article id="${content}" title="Some custom heading"]`);
                            }
                        },
                    ]
                });
            }
        });
        tinymce.PluginManager.add('shortcodes', tinymce.plugins.shortcodes);
    }
}

(function (window) {
    window.deb = function (s) {
        if (window.location.hostname == "localhost" ||
            window.location.href.indexOf("dev") > 0 ||
            window.location.href.indexOf(":300") > 0) {
        }
    }
    window.TD = new TD();

    document.addEventListener('DOMContentLoaded', e => window.TD.state.ready(e));
    window.addEventListener('load', e => window.TD.state.load(e));
})(window, document);
