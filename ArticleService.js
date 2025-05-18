const ROOT_URL = 'https://sprint-mission-api.vercel.app/articles';

export function getArticleList(page = 1, pageSize = 10, keyword = ""){
    const url = ROOT_URL + "?page=" + page + "&pageSize=" + pageSize + "&keyword=" + keyword;
    
    return fetch(url)
        .then(function (response)  {
            if (!response.ok) {
                throw new Error("불러오기 실패");
            }
            return response.json();
        })
        .then(function (data) {
            return data;
        })
        .catch(function (error) {
            console.log(error);
        })
}

export function getArticle(id) {
    return fetch(ROOT_URL + "/" + id)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("불러오기 실패");
            }
            return response.json();
        })
        .then(function (data) {
            return data;
        })
        .catch(function (error) {
            console.log(error);
        })
}

export function createArticle({ title, content, image }) {
    return fetch(ROOT_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, content, image })
    })
        .then(function (response) {
            if (!response.ok) {
                throw new Error("생성 실패");
            }
            return response.json();
        })
        .then(function (data) {
            return data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function patchArticle(id, data = {}) {
    return fetch(ROOT_URL + "/" + id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(function (response) {
            if (!response.ok) {
                throw new Error("수정 실패");
            }
            return response.json();
        })
        .then(function (data) {
            return data;
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function deleteArticle(id) {
    return fetch(ROOT_URL + "/" + id, {
        method: "DELETE"
    })
        .then(function (response) {
            if (!response.ok) {
                throw new Error("삭제 실패");
            }
            return response.text();
        })
        .then(function (data) {
            return data;
        })
        .catch(function (error) {
            console.log(error);
        });
}