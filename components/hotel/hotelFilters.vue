<template>
  <div class="filters">
    <el-row type="flex" class="filters-top" justify="space-between" align="middle">
      <el-col :span="8">
        <div class="live-filters">
          <div class="price">
            <div>价格</div>
            <div>0-4000</div>
          </div>
          <div class="block">
            <el-slider v-model="value" :max="4000"></el-slider>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="live-filters">
          <div class="live">住宿等级</div>
          <el-dropdown>
            <span class="el-dropdown-link">
              不限
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" style="width:150px;">
              <el-dropdown-item>
                <i class="iconfont iconcircle"></i>1星
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont iconcircle"></i>2星
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont iconcircle"></i>3星
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont iconcircle"></i>4星
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont iconcircle"></i>5星
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="live-filters">
          <div class="live">住宿类型</div>
          <el-dropdown>
            <span class="el-dropdown-link">
              不限
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" style="width:150px;">
              <el-dropdown-item>
                <i class="iconfont iconcircle"></i>经济型
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont iconcircle"></i>舒适型
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont iconcircle"></i>高档型
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont iconcircle"></i>豪华型
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont iconcircle"></i>度假村
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="live-filters">
          <div class="live">酒店设施</div>
          <el-dropdown>
            <span class="el-dropdown-link">
              不限
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" style="width:150px;">
              <el-dropdown-item>
                <i class="iconfont iconcircle"></i>wifi
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont iconcircle"></i>热水壶
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont iconcircle"></i>吹风机
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont iconcircle"></i>外币兑换服务
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont iconcircle"></i>洗衣服务
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="live-filters" style="border:none;">
          <div class="live">酒店品牌</div>
          <el-dropdown>
            <span class="el-dropdown-link">
              不限
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" style="width:150px;">
              <el-dropdown-item>
                <i class="iconfont iconcircle"></i>7天连锁
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont iconcircle"></i>汉庭
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont iconcircle"></i>如家
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont iconcircle"></i>格林豪泰
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont iconcircle"></i>海友
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
    <el-row
      type="flex"
      justify="space-between"
      align-items="center"
      style="padding:25px 0;border-bottom:1px solid #eee;"
    >
      <el-col :span="8">
        <a href="#">
          <img
            src="http://qcloud.dpfile.com/pc/wQ2ejOSmhB4OoEq1LYPHp_2RhNciyW026YiQFr_EEZsQrI_ZB6abZPwgKDOmI03U3dWYFEM5hoslgWXTJDjSPA.jpg"
            alt="好来阁商务宾馆"
            width="320"
            height="210"
          />
        </a>
      </el-col>
      <el-col :span="10">
        <el-row>
          <h2 style="font-weight:normal;">好来阁商务宾馆</h2>
        </el-row>
        <el-row class="hotelLevel">
          <span>hao lai ge shang wu hotel</span>
          <span title="3星级" id="star">
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
          </span>
          <span>经济型</span>
        </el-row>
        <el-row type="flex" justify="space-between">
          <el-col :span="10" style="padding:0 5px;">
            <div>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);">
                  <!---->
                </i>
              </span>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);">
                  <!---->
                </i>
              </span>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);">
                  <!---->
                </i>
              </span>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(239, 242, 247);">
                  <i
                    class="el-rate__decimal el-icon-star-on"
                    style="color: rgb(247, 186, 42); width: 50%;"
                  ></i>
                </i>
              </span>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(239, 242, 247);">
                  <!---->
                </i>
              </span>
              <span class="el-rate__text" style="color: rgb(255, 153, 0);">3.5分</span>
            </div>
          </el-col>
          <el-col :span="7" style="padding:0 5px;">
            <span class="hight-light">49</span> 条评论
          </el-col>
          <el-col :span="7" style="padding:0 5px;">
            <span class="hight-light">39</span> 篇游记
          </el-col>
        </el-row>
        <div class="hotel-summary-row"></div>
        <div class="location-row">
          <i class="iconfont iconlocation"></i>
          位于: 高淳县淳溪镇镇兴路118号(高淳县委党校对面)
        </div>
      </el-col>
      <el-col :span="6">
        <ul style="margin-top:20px;padding:0 10px;">
          <li>
            <span>携程</span>
            <div>
              <span class="hight-light larger">￥122</span>起
              <i class="el-icon-arrow-right"></i>
            </div>
          </li>
          <li>
            <span>艺龙</span>
            <div>
              <span class="hight-light larger">￥101</span>起
              <i class="el-icon-arrow-right"></i>
            </div>
          </li>
          <li>
            <span>Hotels.com</span>
            <div>
              <span class="hight-light larger">￥85</span>起
              <i class="el-icon-arrow-right"></i>
            </div>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-row
      type="flex"
      justify="space-between"
      align-items="center"
      style="padding:25px 0;border-bottom:1px solid #eee;"
    >
      <el-col :span="8">
        <a href="#">
          <img
            src="http://qcloud.dpfile.com/pc/wQ2ejOSmhB4OoEq1LYPHp_2RhNciyW026YiQFr_EEZsQrI_ZB6abZPwgKDOmI03U3dWYFEM5hoslgWXTJDjSPA.jpg"
            alt="好来阁商务宾馆"
            width="320"
            height="210"
          />
        </a>
      </el-col>
      <el-col :span="10">
        <el-row>
          <h2 style="font-weight:normal;">好来阁商务宾馆</h2>
        </el-row>
        <el-row class="hotelLevel">
          <span>hao lai ge shang wu hotel</span>
          <span title="3星级" id="star">
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
          </span>
          <span>经济型</span>
        </el-row>
        <el-row type="flex" justify="space-between">
          <el-col :span="10" style="padding:0 5px;">
            <div>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);">
                  <!---->
                </i>
              </span>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);">
                  <!---->
                </i>
              </span>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);">
                  <!---->
                </i>
              </span>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(239, 242, 247);">
                  <i
                    class="el-rate__decimal el-icon-star-on"
                    style="color: rgb(247, 186, 42); width: 50%;"
                  ></i>
                </i>
              </span>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(239, 242, 247);">
                  <!---->
                </i>
              </span>
              <span class="el-rate__text" style="color: rgb(255, 153, 0);">3.5分</span>
            </div>
          </el-col>
          <el-col :span="7" style="padding:0 5px;">
            <span class="hight-light">49</span> 条评论
          </el-col>
          <el-col :span="7" style="padding:0 5px;">
            <span class="hight-light">39</span> 篇游记
          </el-col>
        </el-row>
        <div class="hotel-summary-row"></div>
        <div class="location-row">
          <i class="iconfont iconlocation"></i>
          位于: 高淳县淳溪镇镇兴路118号(高淳县委党校对面)
        </div>
      </el-col>
      <el-col :span="6">
        <ul style="margin-top:20px;padding:0 10px;">
          <li>
            <span>携程</span>
            <div>
              <span class="hight-light larger">￥122</span>起
              <i class="el-icon-arrow-right"></i>
            </div>
          </li>
          <li>
            <span>艺龙</span>
            <div>
              <span class="hight-light larger">￥101</span>起
              <i class="el-icon-arrow-right"></i>
            </div>
          </li>
          <li>
            <span>Hotels.com</span>
            <div>
              <span class="hight-light larger">￥85</span>起
              <i class="el-icon-arrow-right"></i>
            </div>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-row
      type="flex"
      justify="space-between"
      align-items="center"
      style="padding:25px 0;border-bottom:1px solid #eee;"
    >
      <el-col :span="8">
        <a href="#">
          <img
            src="http://qcloud.dpfile.com/pc/wQ2ejOSmhB4OoEq1LYPHp_2RhNciyW026YiQFr_EEZsQrI_ZB6abZPwgKDOmI03U3dWYFEM5hoslgWXTJDjSPA.jpg"
            alt="好来阁商务宾馆"
            width="320"
            height="210"
          />
        </a>
      </el-col>
      <el-col :span="10">
        <el-row>
          <h2 style="font-weight:normal;">好来阁商务宾馆</h2>
        </el-row>
        <el-row class="hotelLevel">
          <span>hao lai ge shang wu hotel</span>
          <span title="3星级" id="star">
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
          </span>
          <span>经济型</span>
        </el-row>
        <el-row type="flex" justify="space-between">
          <el-col :span="10" style="padding:0 5px;">
            <div>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);">
                  <!---->
                </i>
              </span>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);">
                  <!---->
                </i>
              </span>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);">
                  <!---->
                </i>
              </span>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(239, 242, 247);">
                  <i
                    class="el-rate__decimal el-icon-star-on"
                    style="color: rgb(247, 186, 42); width: 50%;"
                  ></i>
                </i>
              </span>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(239, 242, 247);">
                  <!---->
                </i>
              </span>
              <span class="el-rate__text" style="color: rgb(255, 153, 0);">3.5分</span>
            </div>
          </el-col>
          <el-col :span="7" style="padding:0 5px;">
            <span class="hight-light">49</span> 条评论
          </el-col>
          <el-col :span="7" style="padding:0 5px;">
            <span class="hight-light">39</span> 篇游记
          </el-col>
        </el-row>
        <div class="hotel-summary-row"></div>
        <div class="location-row">
          <i class="iconfont iconlocation"></i>
          位于: 高淳县淳溪镇镇兴路118号(高淳县委党校对面)
        </div>
      </el-col>
      <el-col :span="6">
        <ul style="margin-top:20px;padding:0 10px;">
          <li>
            <span>携程</span>
            <div>
              <span class="hight-light larger">￥122</span>起
              <i class="el-icon-arrow-right"></i>
            </div>
          </li>
          <li>
            <span>艺龙</span>
            <div>
              <span class="hight-light larger">￥101</span>起
              <i class="el-icon-arrow-right"></i>
            </div>
          </li>
          <li>
            <span>Hotels.com</span>
            <div>
              <span class="hight-light larger">￥85</span>起
              <i class="el-icon-arrow-right"></i>
            </div>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-row
      type="flex"
      justify="space-between"
      align-items="center"
      style="padding:25px 0;border-bottom:1px solid #eee;"
    >
      <el-col :span="8">
        <a href="#">
          <img
            src="http://qcloud.dpfile.com/pc/wQ2ejOSmhB4OoEq1LYPHp_2RhNciyW026YiQFr_EEZsQrI_ZB6abZPwgKDOmI03U3dWYFEM5hoslgWXTJDjSPA.jpg"
            alt="好来阁商务宾馆"
            width="320"
            height="210"
          />
        </a>
      </el-col>
      <el-col :span="10">
        <el-row>
          <h2 style="font-weight:normal;">好来阁商务宾馆</h2>
        </el-row>
        <el-row class="hotelLevel">
          <span>hao lai ge shang wu hotel</span>
          <span title="3星级" id="star">
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
          </span>
          <span>经济型</span>
        </el-row>
        <el-row type="flex" justify="space-between">
          <el-col :span="10" style="padding:0 5px;">
            <div>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);">
                  <!---->
                </i>
              </span>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);">
                  <!---->
                </i>
              </span>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);">
                  <!---->
                </i>
              </span>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(239, 242, 247);">
                  <i
                    class="el-rate__decimal el-icon-star-on"
                    style="color: rgb(247, 186, 42); width: 50%;"
                  ></i>
                </i>
              </span>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(239, 242, 247);">
                  <!---->
                </i>
              </span>
              <span class="el-rate__text" style="color: rgb(255, 153, 0);">3.5分</span>
            </div>
          </el-col>
          <el-col :span="7" style="padding:0 5px;">
            <span class="hight-light">49</span> 条评论
          </el-col>
          <el-col :span="7" style="padding:0 5px;">
            <span class="hight-light">39</span> 篇游记
          </el-col>
        </el-row>
        <div class="hotel-summary-row"></div>
        <div class="location-row">
          <i class="iconfont iconlocation"></i>
          位于: 高淳县淳溪镇镇兴路118号(高淳县委党校对面)
        </div>
      </el-col>
      <el-col :span="6">
        <ul style="margin-top:20px;padding:0 10px;">
          <li>
            <span>携程</span>
            <div>
              <span class="hight-light larger">￥122</span>起
              <i class="el-icon-arrow-right"></i>
            </div>
          </li>
          <li>
            <span>艺龙</span>
            <div>
              <span class="hight-light larger">￥101</span>起
              <i class="el-icon-arrow-right"></i>
            </div>
          </li>
          <li>
            <span>Hotels.com</span>
            <div>
              <span class="hight-light larger">￥85</span>起
              <i class="el-icon-arrow-right"></i>
            </div>
          </li>
        </ul>
      </el-col>
    </el-row>
    <el-row
      type="flex"
      justify="space-between"
      align-items="center"
      style="padding:25px 0;border-bottom:1px solid #eee;"
    >
      <el-col :span="8">
        <a href="#">
          <img
            src="http://qcloud.dpfile.com/pc/wQ2ejOSmhB4OoEq1LYPHp_2RhNciyW026YiQFr_EEZsQrI_ZB6abZPwgKDOmI03U3dWYFEM5hoslgWXTJDjSPA.jpg"
            alt="好来阁商务宾馆"
            width="320"
            height="210"
          />
        </a>
      </el-col>
      <el-col :span="10">
        <el-row>
          <h2 style="font-weight:normal;">好来阁商务宾馆</h2>
        </el-row>
        <el-row class="hotelLevel">
          <span>hao lai ge shang wu hotel</span>
          <span title="3星级" id="star">
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
          </span>
          <span>经济型</span>
        </el-row>
        <el-row type="flex" justify="space-between">
          <el-col :span="10" style="padding:0 5px;">
            <div>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);">
                  <!---->
                </i>
              </span>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);">
                  <!---->
                </i>
              </span>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);">
                  <!---->
                </i>
              </span>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(239, 242, 247);">
                  <i
                    class="el-rate__decimal el-icon-star-on"
                    style="color: rgb(247, 186, 42); width: 50%;"
                  ></i>
                </i>
              </span>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(239, 242, 247);">
                  <!---->
                </i>
              </span>
              <span class="el-rate__text" style="color: rgb(255, 153, 0);">3.5分</span>
            </div>
          </el-col>
          <el-col :span="7" style="padding:0 5px;">
            <span class="hight-light">49</span> 条评论
          </el-col>
          <el-col :span="7" style="padding:0 5px;">
            <span class="hight-light">39</span> 篇游记
          </el-col>
        </el-row>
        <div class="hotel-summary-row"></div>
        <div class="location-row">
          <i class="iconfont iconlocation"></i>
          位于: 高淳县淳溪镇镇兴路118号(高淳县委党校对面)
        </div>
      </el-col>
      <el-col :span="6">
        <ul style="margin-top:20px;padding:0 10px;">
          <li>
            <span>携程</span>
            <div>
              <span class="hight-light larger">￥122</span>起
              <i class="el-icon-arrow-right"></i>
            </div>
          </li>
          <li>
            <span>艺龙</span>
            <div>
              <span class="hight-light larger">￥101</span>起
              <i class="el-icon-arrow-right"></i>
            </div>
          </li>
          <li>
            <span>Hotels.com</span>
            <div>
              <span class="hight-light larger">￥85</span>起
              <i class="el-icon-arrow-right"></i>
            </div>
          </li>
        </ul>
      </el-col>
    </el-row>
    <div class="pagination-box">
      <el-pagination
        small
        layout="prev, pager, next"
        :total="50"
        prev-text='< 上一页'
        next-text='下一页 >'>
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 4000
    };
  }
};
</script>

<style lang="less" scoped>
.filters-top {
  padding: 5px 0;
  border: 1px solid #ddd;
  color: #666;
  .live-filters {
    padding: 5px 20px;
    border-right: 1px solid #ddd;
    .price {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
    .live {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }
    .el-dropdown {
      width: 100%;
      height: 38px;
      line-height: 38px;
      cursor: pointer;
    }
    .el-dropdown-link {
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
.hotelLevel {
  color: #999;
  margin-bottom: 0.5em;
}
#star {
  .iconhuangguan {
    color: #f90 !important;
  }
}
.el-rate__icon {
  margin-right: 0;
}
.hight-light {
  color: #f90;
}
.location-row {
  font-size: 14px;
  color: #666;
}
.hotel-summary-row {
  margin: 1em 0;
}
ul>li{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ebeef5;
  padding: 12px 10px;
  color: #606266;
  font-size: 14px;
}
.larger {
  font-size: larger;
}
.pagination-box{
  display: flex;
  justify-content: flex-end;
  padding: 20px 0 40px;
}
</style>