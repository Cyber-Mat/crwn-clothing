import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './shop.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectShopCollections } from '../../redux/shop/shop.selector';

const ShopPage = ({ collections }) => (
  <div>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = state =>
  createStructuredSelector({
    collections: selectShopCollections,
  });

export default connect(mapStateToProps)(ShopPage);
