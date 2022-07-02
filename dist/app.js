"use strict";
// Utilitary Types
class FeatureFlags {
    darktheme = () => true;
    lighttheme = () => false;
    nfsw() {
        return "false";
    }
    env = "Hello World";
}
