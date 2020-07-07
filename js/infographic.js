function ActivePlaceholder() {


    if (arguments.length === 1) {
        var element = arguments[0];
        this.base = null;
        this.placeholders = null;

        this.fBase = 24;
        this.fBuild = 12;
        this.fFull = 24;
        this.fRemove = 12;
    }
    else if (arguments.length === 3) {
        var element = arguments[0];
        this.base = arguments[1];
        this.placeholders = arguments[2];

        this.fBase = 24;
        this.fBuild = 12;
        this.fFull = 24;
        this.fRemove = 12;
    }
    else if (arguments.length === 7) {
        var element = arguments[0];
        this.base = arguments[1];
        this.placeholders = arguments[2];

        this.fBase = arguments[3];
        this.fBuild = arguments[4];
        this.fFull = arguments[5];
        this.fRemove = arguments[6];
    }


    var state = 'base';
    var currentWord = null;
    var currentWordIndex = 0;
    var countdown = 0;
    var animation = null;


    var fps = 24;

    this.start = function () {
        if (this.base == null || this.placeholders == null) {
            console.log("No base or placeholders. Make sure you know what you're doing.");
            return;
        }
        if (animation) {
            console.log("Active placeholder is already running.");
            return;
        }

        // Closures or something
        var activePlaceholder = this;

        animation = window.setInterval(function () {
            switch (state) {
                case 'base':
                    if (countdown > 0) {
                        if (--countdown === 0) {
                            state = 'build';
                        }
                    } else {
                        currentWord = activePlaceholder.placeholders[currentWordIndex];
                        element.placeholder = activePlaceholder.base;
                        countdown = activePlaceholder.fBase;
                        currentWordIndex = (currentWordIndex + 1) % activePlaceholder.placeholders.length;
                    }
                    break;

                case 'build':
                    if (countdown > 0) {
                        var percent = (activePlaceholder.fBuild - countdown) / activePlaceholder.fBuild;
                        var addon = currentWord.substring(0, Math.floor(percent * currentWord.length));
                        element.placeholder = activePlaceholder.base + addon;
                        if (--countdown === 0) {
                            state = 'full';
                        }
                    } else {
                        countdown = activePlaceholder.fBuild;
                    }
                    break;

                case 'full':
                    if (countdown > 0) {
                        if (--countdown === 0) {
                            state = 'remove';
                        }
                    } else {
                        element.placeholder = activePlaceholder.base + currentWord;
                        countdown = activePlaceholder.fFull;
                    }
                    break;

                case 'remove':
                    if (countdown > 0) {
                        var percent = countdown / activePlaceholder.fRemove;
                        var addon = currentWord.substring(0, Math.floor(percent * currentWord.length));
                        element.placeholder = activePlaceholder.base + addon;
                        if (--countdown === 0) {
                            state = 'base';
                        }
                    } else {
                        countdown = activePlaceholder.fRemove;
                    }
                    break;

                default:
                    console.log('Something went horribly wrong: ' + activePlaceholder.base);
                    break;
            }
        }, 1000 / fps);
    }

	/*
	Stops animation, sets the <input>'s placeholder to base + full placeholder regardless of state.
	*/
    this.stop = function () {
        window.clearInterval(animation);
        animation = false;
        element.placeholder = this.base + this.placeholders[currentWordIndex];
        state = 'full';
        countdown = 0;
    }
}

var input2 = document.getElementById('input');
var activePlaceholder = new ActivePlaceholder(input, '', ['Tražiš dašak prirode?', 'Na pravom si mjestu!']);
activePlaceholder.start();
