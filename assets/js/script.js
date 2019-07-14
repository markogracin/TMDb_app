require('./includes');

if (typeof SdApp === 'undefined') SdApp = {};

SdApp = {

    /**
     * Initialize
     *
     * @return {void}
     */
    init: function () {
        SdApp.addListeners();
    },

    /**
     * Event listeners
     *
     * @return {void}
     */
    addListeners: function () {

    }
};

SdApp.init();