//your JS code here. If required.
const currentUrl = window.location.href;

// const urlLength = currentUrl.length;

// alert(`The length of the URL is: ${urlLength}`);

const url = new URL(currentUrl);

// Get the hostname (domain) only
const domain = url.hostname;

// Get the length of the domain
const domainLength = domain.length;

// Display the result
alert(`The length of the domain is: ${domainLength}`);
