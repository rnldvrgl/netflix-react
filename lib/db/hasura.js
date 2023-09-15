async function queryHasuraGQL(operationsDoc, operationName, variables) {
    const result = await fetch(process.env.NEXT_PUBLIC_HASURA_ADMIN_URL, {
        method: "POST",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicm9uYWxkIiwiaWF0IjoxNjk0NzQzMjg0LCJleHAiOjE2OTUzNDgxMDcsImh0dHBzOi8vaGFzdXJhLmlvL2p3dC9jbGFpbXMiOnsieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoidXNlciIsIngtaGFzdXJhLXVzZXItaWQiOiJub3Ryb25hbGQifX0.TezyEOe_l9Zpk3vz-6XoFYHx-Shi0K47bmwpO2rTJiw",
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