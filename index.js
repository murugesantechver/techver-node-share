function greet(firstName, lastName) {
    const now = new Date().toLocaleString(); // current date & time in local format
    return `Hello ${firstName} ${lastName}, Now time is ${now}`;
}

module.exports = greet; // still works for CommonJS
module.exports.default = greet; // adds default for TS/ESM
