// All subscriptions can be managed by p**@speech***.com from the PayPal dashboard
// https://www.paypal.com/billing/subscriptions/list/all

const SKU_ID = "SKU_SPEECHNINJA_PREMIUM_MONTHLY__";  // Note: This is not random!
                  // Compatible with the same ID defined on our payments processing server.

function resetPayPalButton(sum, uid, containerId, onApprove, onCancel) {
  if (!uid) {
    return;
  }

  document.getElementById(containerId).innerHTML = "";

  paypal.Buttons({
    style: {
      shape: 'pill',
      color: 'gold',
      layout: 'vertical',
      label: 'paypal'
    },
    createSubscription: function(data, actions) {
      return actions.subscription.create({
        /* Creates the subscription */
        plan_id: 'P-21C493246T7713418MSICFIY',
        custom_id: SKU_ID + uid
      });
    },
    onApprove: function(data, actions) {
      alert('Thank you - order received.');
      console.log('subscriptionID: ' + data.subscriptionID); // You can add optional success message for the subscriber here
      if (window.gtag) {
        window.gtag('event', "purchase_speechninja_success" ,{value:'1'})
      }
      if (onApprove && onApprove instanceof Function) {
        onApprove(data.subscriptionID, uid);
      }
    },
    onCancel: function(data) {
      if (window.gtag) {
        window.gtag('event', "purchase_speechninja_canceled" ,{value:'1'})
      }

      if (onCancel && onCancel instanceof Function) {
        onCancel(data);
      }
    },
  }).render('#'+containerId); // Renders the PayPal button
}
