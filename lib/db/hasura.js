async function queryHasuraGQL(operationsDoc, operationName, variables) {
    const result = await fetch(process.env.NEXT_PUBLIC_HASURA_ADMIN_URL, {
        method: "POST",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicm9uYWxkIiwiaWF0IjoxNjk0ODE2MjQ5LCJleHAiOjE2OTU0MjEwNjAsImh0dHBzOi8vaGFzdXJhLmlvL2p3dC9jbGFpbXMiOnsieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoidXNlciIsIngtaGFzdXJhLXVzZXItaWQiOiJyb25hbGQifX0.xWPd1nFLr4jg7G5BJ34WufNPPX9GDxu9jibNmU2CUe4",
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