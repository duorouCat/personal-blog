<template>
  <div class="root">
    <div class="main-page">
      <div>{{ msg }}</div>
      <el-row :gutter="50">
        <el-col :span="12">
          <el-card>
            <div slot="header" class="card-header">
              {{ catalog[0].title }}
              <el-button @click="clickTitle()"></el-button>
            </div>
            <div class="content">
              <div v-for="(article, i) in catalog[0].articles" :key="i">{{ article.title }}</div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card>
            <div slot="header" class="card-header">
              {{ catalog[1].title }}
            </div>
            <div class="content">
              <div v-for="(article, i) in catalog[0].articles" :key="i">{{ article.title }}</div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="50">
        <el-col :span="12">
          <el-card>
            <div slot="header" class="card-header">
              {{ catalog[2].title }}
            </div>
            <div class="content">
              <div v-for="(article, i) in catalog[0].articles" :key="i">{{ article.title }}</div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card>
            <div slot="header" class="card-header">
              {{ catalog[3].title }}
            </div>
            <div class="content">
              <div v-for="(article, i) in catalog[0].articles" :key="i">{{ article.title }}</div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }, 
  data() {
    return {
      loading: false, 
      catalog: [
        {
          title: "目录1",
          articles: [
            {title: "文章1"},
            {title: "文章2"},
            {title: "文章3"}
          ]
        },
        {
          title: "目录2",
          articles: [
            {title: "文章1"},
            {title: "文章2"},
            {title: "文章3"}
          ]
        },
        {
          title: "目录3",
          articles: [
            {title: "文章1"},
            {title: "文章2"},
            {title: "文章3"}
          ]
        },
        {
          title: "目录4",
          articles: [
            {title: "文章1"},
            {title: "文章2"},
            {title: "文章3"}
          ]
        }
      ]
    };
  }, 
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    clickTitle() {
      console.log("click title");
    }
  }
}
</script>

<style>
.main-page {
  background-color:aliceblue;
  color:aquamarine;
  margin: 20px;
  border: 1px solid;
  padding: 30px;
}
.content {
  border: 1px 0 1px 0 solid;
}
</style>