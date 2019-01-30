import React from 'react';
import CSSModules from 'react-css-modules';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styles from './Main.css';
import Test from './Test';

const GraphqlTest = ({ filter }) => (
  <Query
    query={gql`
      {
        user(id: 1) {
          id
          firstname
          lastname
          email
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <div>
          <div>firstname: {data.user.firstname}</div>
          <div>lastname: {data.user.lastname}</div>
        </div>
      );
    }}
  </Query>
);

@CSSModules(styles)
export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="main">
        <GraphqlTest filter={{ start: 1, end: 10 }} />
      </div>
    );
  }
}
