/**
 * @copyright: (C) 2020 Vancouver Film School.  All Rights Reserved.
 * @author:    Pradhiksha {@link mailto:dd46Pradhiksha@vfs.com}
 * @version:   1.0
 */
'use strict';

import App from './App.js';

(function Main() {

    // Wait for the DOM to finish loading (we don't want to reference things that don't exist)
    $(document).ready('DOMContentLoaded', event => {

        // Find out what we are running on
        const MOBILE = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test( navigator.userAgent );

        // Init the app and run it
        let app = new App( MOBILE );
        app.run()
    })
})()

