"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDatabase1622304168366 = void 0;
class CreateDatabase1622304168366 {
    async up(queryRunner) {
        queryRunner.createDatabase('yourcar', true);
    }
    async down(queryRunner) {
        queryRunner.dropDatabase('yourcar', true);
    }
}
exports.CreateDatabase1622304168366 = CreateDatabase1622304168366;
//# sourceMappingURL=1622304168366-CreateDatabase.js.map