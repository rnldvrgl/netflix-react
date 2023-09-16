export async function isNewUser(token) {
    const operationsDoc = `
  query MyQuery {
    users(where: {issuer: {_eq: "did:ethr:0x39258f6a54693F5B23a43764dE2E4de34B21e050"}}) {
      email
      id
      issuer
    }
  }
`;

    const response = await queryHasuraGQL(operationsDoc, "MyQuery", {}, token);

    return response?.data?.users?.length === 0;
}

async function queryHasuraGQL(operationsDoc, operationName, variables, token) {
    const result = await fetch(process.env.NEXT_PUBLIC_HASURA_ADMIN_URL, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: operationsDoc,
            variables: variables,
            operationName: operationName,
        }),
    });

    return await result.json();
}

function fetchMyQuery() {
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
    return queryHasuraGQL(operationsDoc, "MyQuery", {});
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