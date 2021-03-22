import { types as t } from '@babel/core';

export default function() {
  return {
    name: 'babel-plugin-name-goes-here',
    visitor: {
        BinaryExpression(path) {
            // if "<" operator, change to ">"
        }
    }
  };
}
