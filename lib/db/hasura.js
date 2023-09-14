async function fetchGraphQL(operationsDoc, operationName, variables) {
    const result = await fetch("https://complete-kiwi-63.hasura.app/v1/graphql", {
        method: "POST",
        headers: {
            "x-hasura-admin-secret": "1XHa02M46cWiyh4Mh2erULkzUWcuE54czlE4a6hkzMZ5ZslgOd2n7UeNlaXJlb1Q",
        },
        body: JSON.stringify({
            query: operationsDoc,
            variables: variables,
            operationName: operationName,
        }),
    });

    return await result.json();
}

const operationsDoc = `
  query MyQuery {
    users {
      email
      id
      issuer
      publicAddress
    }
  }
`;

function fetchMyQuery() {
    return fetchGraphQL(operationsDoc, "MyQuery", {});
}

export async function startFetchMyQuery() {
    const { errors, data } = await fetchMyQuery();

    if (errors) {
        // handle those errors like a pro
        console.error(errors);
    }

    // do something great with this precious data
    console.log(data);
}

startFetchMyQuery();