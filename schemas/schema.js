import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import project from './project';
import tag from './tag';
import gif from './gif';

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([project, tag, gif]),
});
