const ROOT_URL = 'https://sprint-mission-api.vercel.app/products';

export async function getProductList(page = 1, pageSize = 10, keyword = "") {
    const url = ROOT_URL + "?page=" + page + "&pageSize=" + pageSize + "&keyword=" + keyword;
    
   try {
     const response = await fetch(url);
     if (!response.ok) {
        throw new Error("불러오기 실패");
    }
     const data = await response.json();
     return data;
   }
   catch(error) {
    console.error(error);
   }
}

export async function getProduct(id) {
   try {
     const response = await fetch(ROOT_URL + "/" + id);
     if (!response.ok) {
        throw new Error("불러오기 실패");
    }
     const data = await response.json();
     return data;
   }
   catch(error) {
    console.error(error);
   }
}

export async function createProduct({ name, description, price, tags, images }) {
   try {
     const response = await fetch(ROOT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, price, tags, images }),
     });
     if (!response.ok) {
        throw new Error("생성 실패");
    }
     const data = await response.json();
     return data;
   }
   catch(error) {
    console.error(error);
   }
}

export async function patchProduct(id, updateData = {}) {
   try {
     const response = await fetch(ROOT_URL + "/" + id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData),
     });
     if (!response.ok) {
        throw new Error("수정 실패");
    }
     const data = await response.json();
     return data;
   }
   catch(error) {
    console.error(error);
   }
}

export async function deleteProduct(id) {
   try {
     const response = await fetch(ROOT_URL + "/" + id, {
        method: "DELETE"
    });
     if (!response.ok) {
        throw new Error("삭제 실패");
    }
     const data = await response.text();
     return data;
   }
   catch(error) {
    console.error(error);
   }
}