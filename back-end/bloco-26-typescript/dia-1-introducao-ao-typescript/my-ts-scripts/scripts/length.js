"use strict";
exports.__esModule = true;
exports.convert = void 0;
var forMeter = function (value, baseUnit) {
    switch (baseUnit) {
        case 'km':
            return value * 1000;
        case 'hm':
            return value * 100;
        case 'dam':
            return value * 10;
        case 'dm':
            return value / 10;
        case 'cm':
            return value / 100;
        case 'mm':
            return value / 1000;
        default:
            return value;
    }
};
var convert = function (value, baseUnit, unitForConversion) {
    var inMeters = forMeter(value, baseUnit);
    switch (unitForConversion) {
        case 'km':
            return inMeters / 1000;
        case 'hm':
            return inMeters / 100;
        case 'dam':
            return inMeters / 10;
        case 'dm':
            return inMeters * 10;
        case 'cm':
            return inMeters * 100;
        case 'mm':
            return inMeters * 1000;
        default:
            return inMeters;
    }
};
exports.convert = convert;
