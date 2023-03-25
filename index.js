var customerName = "bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
  }



function setBestCustomer() {
    globalThis.bestCustomer = 'not bob';
  }

  function overwriteBestCustomer() {
    globalThis.bestCustomer = 'maybe bob'
  }

  const leastFavoriteCustomer = 'Ben';

  function changeLeastFavoriteCustomer(newCustomer) {
    leastFavoriteCustomer = newCustomer;
  }






