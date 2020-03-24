import CssBaseline from "@material-ui/core/CssBaseline";
import App from "next/app";
import Head from "next/head";
import { createStyles, WithStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { ApolloProvider } from "@apollo/client";
import withApollo, { WithApollo } from "../lib/withApollo";

const styles = createStyles({
  container: {
    width: 500,
    margin: "0 auto"
  }
});

class MyApp extends App<WithApollo & WithStyles<typeof styles>> {
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, classes, apolloClient } = this.props;

    return (
      <>
        <Head>
          <title>My page</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <CssBaseline />
        <main className={classes.container}>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </main>
      </>
    );
  }
}

export default withStyles(styles)(withApollo(MyApp));
