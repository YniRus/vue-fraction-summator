let VueFractionSummator = new Vue({
    el: '#app',
    data: {
        fractionsMaxCount : 5,
        fractionsInitialCount : 1,
        fractionMinValue : 1,
        fractionMaxValue : 99,
        fractions: [],
        error : null
    },
    filters: {
        round: function (value) {
            return value.toFixed(2);
        }
    },
    computed : {
        fractionResult: function() {
            let fractionResult = 0;
            for (let fraction of this.fractions) {
                if(this.empty(fraction.numerator) && this.empty(fraction.denominator)) {
                    continue;
                }
                if(!this.empty(fraction.numerator) && this.empty(fraction.denominator)) {
                    this.error = 'Division by zero';
                    return 0;
                }
                fractionResult += fraction.numerator / fraction.denominator;
            }
            this.error = null;
            return fractionResult;
        },
        allowDelete : function () {
            return this.fractions.length > 1;
        }
    },
    methods : {
        empty : function (value) {
            return typeof value == 'undefined' || value == 0 ||value == null || (Array.isArray(value) && value.length == 0);
        },
        addFraction : function () {
            if(this.fractions.length >= this.fractionsMaxCount) {
                return;
            }
            this.fractions.push({
                numerator : null,
                denominator : null
            });
        },
        removeFraction : function (index) {
            if(this.allowDelete) {
                this.fractions.splice(index, 1);
            }
        },
        showMiddleSign : function (index) {
            return this.fractions.length > 1 && index !== this.fractions.length - 1;
        },
        validateFractionInput : function (fraction, field) {
            if(fraction[field] < this.fractionMinValue) {
                fraction[field] = this.fractionMinValue;
            } else if(fraction[field] > this.fractionMaxValue) {
                fraction[field] = this.fractionMaxValue;
            }
        }
    },
    created : function () {
        for (let i = 0; i < this.fractionsInitialCount; i++) {
            this.addFraction();
        }
    }
});