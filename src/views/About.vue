<template>
  <div>
    <div style="display:inline-block;">
      <el-select ref="select-city" v-model="city" @change="handleSelectChange" automatic-dropdown>
        <el-option
          v-for="item in cities"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          class="self-define-item"
        >
          <el-row :gutter="10" style="line-height:25px;">
            <el-col :span="8" align="left">
              <span class="city-name">{{ item.value }}</span>
              <span class="isrecommened"></span>
            </el-col>
            <el-col :span="16" align="right">
              <el-tag
                v-for="tag in item.labels"
                :key="tag.label"
                color="#fff"
                size="small"
                :class="tagClass(tag.type)"
              >{{tag.label}}</el-tag>
            </el-col>
          </el-row>
        </el-option>
      </el-select>
      <div class="selectresult" @click="handleClick">
        <el-row :gutter="10" style="line-height:38px;">
          <el-col :span="8" align="left">
            <span
              class="city-name"
              style="color:#606266"
              v-if="Object.keys(selected).indexOf('value')>-1"
            >{{selected.value}}</span>
            <span v-else class="placeholder">请选择</span>
            <span class="isrecommened" v-if="Object.keys(selected).indexOf('value')>-1"></span>
          </el-col>
          <el-col :span="16" align="right">
            <el-tag
              v-for="tag in selected.labels"
              :key="tag.label"
              color="#fff"
              size="small"
              :class="tagClass(tag.type)"
            >{{tag.label}}</el-tag>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      city: "",
      selected: {},
      cities: [
        {
          value: "Beijing",
          labels: [
            {
              label: "预计7日12：20可到",
              type: 0
            },
            {
              label: "总路耗1小时30分",
              type: 0
            },
            {
              label: "影响一单巡检",
              type: 1
            }
          ]
        },
        {
          value: "Shanghai",
          labels: [
            {
              label: "总路耗1小时30分",
              type: 0
            },
            {
              label: "影响一单巡检",
              type: 1
            }
          ]
        },
        {
          value: "Nanjing",
          labels: [
            {
              label: "预计7日12：20可到",
              type: 0
            },
            {
              label: "影响一单巡检",
              type: 1
            }
          ]
        },
        {
          value: "Chengdu",
          labels: [
            {
              label: "预计7日12：20可到",
              type: 0
            },
            {
              label: "总路耗1小时30分",
              type: 0
            },
            {
              label: "影响一单巡检",
              type: 1
            }
          ]
        },
        {
          value: "Shenzhen",
          labels: [
            {
              label: "预计7日12：20可到",
              type: 0
            },
            {
              label: "总路耗1小时30分",
              type: 0
            },
            {
              label: "影响一单巡检",
              type: 1
            }
          ]
        },
        {
          value: "Guangzhou",
          labels: [
            {
              label: "预计7日12：20可到",
              type: 0
            },
            {
              label: "总路耗1小时30分",
              type: 0
            },
            {
              label: "影响一单巡检",
              type: 1
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleClick() {
      this.$refs["select-city"].focus();
    },
    handleSelectChange(value) {
      this.selected =
        this.cities && this.cities.filter(item => item.value === value)[0];
    },
    tagClass(type) {
      switch (type) {
        case 0:
          return "tag-green";
        case 1:
          return "tag-red";
        default:
          return "tag-green";
      }
    }
  }
};
</script>

<style>
.el-tag {
  margin: 0 2px;
  padding: 0 5px;
}

.tag-green {
  color: #3ec68b;
  border-color: #3ec68b;
}

.tag-orange {
  color: #ff8100;
  border-color: #ff8100;
}

.tag-red {
  color: #fe3f3b;
  border-color: #fe3f3b;
}

.city-name {
  padding-right: 5px;
}

.placeholder {
  color: #c3c3c3;
  font-size: 13px;
}

.el-select {
  width: 575px;
}

.selectresult {
  height: 38px;
  line-height: 34px;
  width: 500px;
  padding: 0 20px;
  background-color: #fff;
  position: relative;
  top: -39px;
  left: 1px;
  border-radius: 7px;
}

.self-define-item {
  white-space: unset;
  height: unset;
  padding-bottom: 5px;
  padding-top: 5px;
}

.isrecommened::after {
  content: "荐";
  border-radius: 50%;
  line-height: 20px;
  text-align: center;
  font-size: 12px;
  width: 20px;
  height: 20px;
  display: inline-block;
  background-color: rgba(255, 129, 0, 1);
  color: #fff;
}
</style>