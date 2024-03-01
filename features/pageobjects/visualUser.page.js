const { $ } = require('@wdio/globals')
const Page = require('./page');

class visualUserPage extends Page {
    get errorimage () {return $('.shopping_cart_container visual_failure');}

    async validatevisualuserPage() {
        expect(browser).toHaveUrlContaining('/inventory.html')
        expect(this.errorimage).toBeDisplayed()
    }

    async open() {
        return super.open('/inventory.html'); 
    }
}

module.exports = new visualUserPage();




