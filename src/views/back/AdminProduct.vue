<template>
  <div class="adminProduct">
    <div class="text-right">
      <button type="button"
      class="btn btn-primary text-white my-3"
      @click="openModal('new')"
      >
        建立新產品
      </button>
    </div>
    <div class="table-responsive">
      <table class="table table-bordered my-2">
        <thead>
          <th width="120" class="text-center">分類</th>
          <th>產品名稱</th>
          <th width="80" class="text-center">原價</th>
          <th width="80" class="text-center">售價</th>
          <th width="120" class="text-center">是否啟用</th>
          <th width="150" class="text-center d-md-table-cell">編輯</th>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td class="text-center">{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td class="text-right">{{ item.origin_price | currency }}</td>
            <td class="text-right">{{ item.price | currency }}</td>
            <td class="text-center">
              <span v-if="item.is_enabled" class="text-success">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td class="text-center d-md-block">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm mr-1"
                @click="openModal('edit', item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm ml-1"
                @click="openModal('delete', item)"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination :pagination="pagination" @changePage="getProducts" />
    <!-- Product Modal -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      aria-labelledby="productModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title" id="productModalLabel">{{ modalTitle }}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-row">
              <div class="col-md-4">
                <div class="form-group">
                  <label for="imageUrl">輸入圖片網址</label>
                  <input
                    type="url"
                    class="form-control"
                    id="imageUrl"
                    v-model="tempProduct.imageUrl"
                    placeholder="請輸入圖片連結"
                  />
                </div>
                <div class="form-group">
                  <label for="image">或上傳圖片</label>
                  <i
                    class="fas fa-spinner fa-spin"
                    v-if="status.fileUploading"
                  ></i>
                  <input
                    type="file"
                    class="form-control"
                    id="image"
                    @change="uploadFile"
                    ref="files"
                  />
                </div>
                <img
                  :src="tempProduct.imageUrl"
                  v-if="tempProduct.imageUrl"
                  alt="產品圖片"
                />
              </div>
              <div class="col-md-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    v-model="tempProduct.title"
                    placeholder="請輸入標題"
                  />
                </div>
                <div class="form-row">
                  <div class="form-group col-6">
                    <label for="category">分類</label>
                    <input
                      type="text"
                      class="form-control"
                      id="category"
                      v-model="tempProduct.category"
                      placeholder="請輸入分類"
                    />
                  </div>
                  <div class="form-group col-6">
                    <label for="unit">單位</label>
                    <input
                      type="text"
                      class="form-control"
                      id="unit"
                      v-model="tempProduct.unit"
                      placeholder="請輸入單位"
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-6">
                    <label for="origin_price">原價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="origin_price"
                      v-model="tempProduct.origin_price"
                      placeholder="請輸入原價"
                    />
                  </div>
                  <div class="form-group col-6">
                    <label for="price">售價</label>
                    <input
                      type="number"
                      class="form-control"
                      id="price"
                      v-model="tempProduct.price"
                      placeholder="請輸入售價"
                    />
                  </div>
                </div>
                <hr />
                <div class="form-group">
                  <label for="description">產品描述</label>
                  <input
                    type="text"
                    class="form-control"
                    id="description"
                    v-model="tempProduct.description"
                    placeholder="請輸入產品描述"
                  />
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <input
                    type="text"
                    class="form-control"
                    id="content"
                    v-model="tempProduct.content"
                    placeholder="請輸入說明內容"
                  />
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    id="is_enabled"
                    class="form-check-input"
                    v-model="tempProduct.is_enabled"
                    :true-value="1"
                    :false-value="0"
                  />
                  <label for="is_enabled" class="form-check-label"
                    >是否啟用</label
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary text-white"
              @click="updateProduct()"
            >
              確定
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Delete Modal -->
    <div
      class="modal fade"
      id="deleteModal"
      tabindex="-1"
      aria-labelledby="deleteModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title" id="deleteModalLabel">{{ modalTitle }}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">是否確認刪除 {{ tempProduct.title }}</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteProduct()"
            >
              確定
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Pagination from "@/components/Pagination";
export default {
  name: "AdminProduct",
  components: {
    Pagination
  },
  data () {
    return {
      products: [],
      tempProduct: {},
      isNew: false, // 判斷是否為新增產品
      modalTitle: "",
      pagination: {},
      status: {
        fileUploading: false
      }
    };
  },
  methods: {
    getProducts (page = 1) {
      // 取得產品列表
      const vm = this;
      vm.$store.dispatch("isLoading", false);
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`;
      vm.$http
        .get(api)
        .then((response) => {
          if (response.data.success) {
            vm.products = response.data.products;
            vm.pagination = response.data.pagination;
            vm.$store.dispatch("isLoading", false);
          }
        })
        .catch((err) => {
          vm.$store.dispatch("isLoading", false);
          vm.$bus.$emit("messagePush", err, "warning");
        });
    },
    updateProduct () {
      // 新增及修改產品
      const vm = this;
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
      let httpMethod = "post";
      const page = vm.pagination.current_page || 1; // 儲存當前所在頁數
      if (!vm.isNew) {
        // 修改產品->更改方法及api
        httpMethod = "put";
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
      }
      vm.$http[httpMethod](api, { data: vm.tempProduct })
        .then((response) => {
          if (response.data.success) {
            $("#productModal").modal("hide");
            vm.getProducts(page); // 重新渲染列表
            vm.$bus.$emit("messagePush", response.data.message, "success");
            return;
          }
          vm.$bus.$emit("messagePush", response.data.message, "danger");
        })
        .catch((err) => {
          vm.$bus.$emit("messagePush", err, "warning");
        });
    },
    deleteProduct () {
      // 刪除產品
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
      vm.$http
        .delete(api)
        .then((response) => {
          if (response.data.success) {
            $("#deleteModal").modal("hide");
            vm.getProducts();
            vm.$bus.$emit("messagePush", response.data.message, "success");
            return;
          }
          $("#deleteModal").modal("hide");
          vm.$bus.$emit("messagePush", response.data.message, "danger");
        })
        .catch((err) => {
          vm.$bus.$emit("messagePush", err, "warning");
        });
    },
    uploadFile (e) {
      // 上傳檔案
      const uploadedFile = this.$refs.files.files[0];
      const vm = this;
      vm.status.fileUploading = true;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
      const formData = new FormData();
      formData.append("file-to-upload", uploadedFile);
      vm.$http
        .post(api, formData, {
          headers: { "content-type": "multipart/form-data" }
        })
        .then((response) => {
          if (response.data.success) {
            vm.$set(vm.tempProduct, "imageUrl", response.data.imageUrl);
            e.target.value = "";
          } else {
            vm.$bus.$emit("messagePush", response.data.message, "danger");
          }
          vm.status.fileUploading = false;
        })
        .catch((err) => {
          vm.$bus.$emit("messagePush", err, "warning");
        });
    },
    openModal (status, item) {
      // 打開modal
      switch (status) {
        case "new":
          this.tempProduct = {};
          this.isNew = true;
          this.modalTitle = "新增產品";
          $("#productModal").modal("show");
          break;
        case "edit":
          this.tempProduct = { ...item };
          this.isNew = false;
          this.modalTitle = `編輯 ${this.tempProduct.title}`;
          $("#productModal").modal("show");
          break;
        case "delete":
          this.tempProduct = { ...item };
          this.isNew = false;
          this.modalTitle = `刪除 ${this.tempProduct.title}`;
          $("#deleteModal").modal("show");
      }
    }
  },
  created () {
    this.getProducts();
  }
};
</script>
