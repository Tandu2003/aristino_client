import { products } from "./products";

const collections = {
  "bo-suu-tap": {
    title: "Bộ sưu tập đa dạng thiết kế sang trong lịch lãm dành cho quý ông - ARISTINO",
    featuredImage: {
      desktopImage: "https://file.hstatic.net/200000887901/file/banner-collection-bst.jpg",
      mobileImage: "https://file.hstatic.net/200000887901/file/banner-collection-bst-mb.jpg",
    },

    breadcrumbs: [{ name: "BỘ SƯU TẬP", link: "/collections/bo-suu-tap" }],
    desc: "Bộ sưu tập mới 2024",
    listProduct: Array(100).fill(products[0]),
  },
  "hang-moi": {
    title: "Hàng mới nhất với chất liệu cao cấp, mang đến sự lịch lãm cho quý ông - ARISTINO",
    featuredImage: {
      desktopImage: "https://file.hstatic.net/200000887901/file/banner-collection-bst.jpg",
      mobileImage: "https://file.hstatic.net/200000887901/file/banner-collection-bst-mb.jpg",
    },

    breadcrumbs: [{ name: "Hàng Mới", link: "/collections/hang-moi" }],
    desc: "Bộ sưu tập mới 2025",
    listProduct: Array(100).fill(products[0]),
  },
  "tat-ca-quan": {
    title: "Quần Nam thời trang đa dạng, từ phong cách thanh lịch đến cá tính - ARISTINO",
    breadcrumbs: [{ name: "Quần", link: "/collections/quan" }],
    totalProduct: 100,
    listProduct: Array(100).fill(products[0]),
  },
};

export { collections };
