"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Please include category name']
    },
    description: {
        type: String
    }
});
const Category = (0, mongoose_1.model)('category', categorySchema);
exports.default = Category;
//# sourceMappingURL=category.model.js.map