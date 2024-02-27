const { $ } = require('@wdio/globals')
const Page = require('./page');

class problemPage extends Page {
    get errorimage () {return $('.inventory_item_img');}

    async validateproblemPage() {
        expect(browser).toHaveUrlContaining('/inventory.html')
        expect(this.errorimage).toBeDisplayed()
    }

    async open() {
        return super.open('/inventory.html'); 
    }
}

module.exports = new problemPage();

