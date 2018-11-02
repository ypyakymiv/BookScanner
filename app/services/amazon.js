import AmazonMWS from 'amazon-mws';

const SELLER_ID = 'A1NJEJMUEJIBZO';
const MWS_AUTH_TOKEN = 'amzn.mws.7cad55ce-6076-f655-47be-28d35ae6b3d8';
const MARKETPLACE_ID = 'ATVPDKIKX0DER';


const MWS = AmazonMWS('AKIAJ2B4XSMTLZSKD2JQ', 'XTizPrxswI+nLAXb6fZJnz+jOsrC5tmbtjmkpuBq');

function uiee(book) {
  const { isbn } = book;
  const condition = '2';

  return (
    `NT|${isbn}
    CN|${condition}`
  );
}

function source(book) {
  MWS.products.search({
    'Version': '2011-10-01',
    'Action': 'ListMatchingProducts',
    'SellerId': SELLER_ID,
    'MWSAuthToken': MWS_AUTH_TOKEN,
    'MarketplaceId': MARKETPLACE_ID,
    'Query': book.isbn.toString()
  }).then(result => {
    console.log(result);
  }, error => {
    console.log(error);
  });
}

function list(book) {
  const FeedType = '_POST_UIEE_BOOKLOADER_DATA_';
}

export {
  source,
  list
};
