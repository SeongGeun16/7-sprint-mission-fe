import {
    getArticleList,
    getArticle,
    createArticle,
    patchArticle,
    deleteArticle
} from "./ArticleService.js";

import {
    getProductList,
    getProduct,
    createProduct,
    patchProduct,
    deleteProduct
} from "./ProductService.js";

await getArticleList();
await getArticle(5);
await createArticle({ title: "새 제목", content: "새 내용", image: "이미지"});
await patchArticle(5, { title: "제목 수정" });
await deleteArticle(5);

await getProductList();
await getProduct(15);
await createProduct({ name: "새 상품", description: "상품 설명", price: 15000, tags: ["태그"], images: ["이미지"] });
await patchProduct(15, { price: 9999 });
await deleteProduct(15);