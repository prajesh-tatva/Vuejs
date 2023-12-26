
<script setup>
import { ref } from 'vue'

const SalesSelect = ref('')
const CategoriesSelect = ref('')
const LatestSelect = ref('')

const tableData = [
  {
    orderid: '#54757',
    customerName: 'Alfonso Levin',
    date: 'Oct 12, 2023',
    price: '$562',
    status: 'Paid'
  },
  {
    orderid: '#34768',
    customerName: 'Leo Baptista',
    date: 'Oct 12, 2023',
    price: '$369',
    status: 'Pending'
  },
  {
    orderid: '#28907',
    customerName: 'Corey Rosser',
    date: 'Oct 06, 2023',
    price: '$3600',
    status: 'Paid'
  },
  {
    orderid: '#21456',
    customerName: 'Justin Press',
    date: 'Sep 26, 2023',
    price: '$1600',
    status: 'Failed'
  },
]

const tableData2 = [
  {
    Product: 'Luminaire Headphones',
    Sold: '562',
  },
  {
    Product: 'Black Sneaker',
    Sold: '362',
  },
  {
    Product: 'Gray Hoodies',
    Sold: '166',
  },
  {
    Product: 'Blue Backpack',
    Sold: '658',
  },
  {
    Product: 'Strip Analog Watch',
    Sold: '986',
  },
]
import checklistImage from '@/assets/images/ic-checklist.svg';
import salesImage from '@/assets/images/ic-sales.svg';
import revenueImage from '@/assets/images/ic-revenue.svg';
import profitImage from '@/assets/images/ic-profit.svg';
const countCardData = [
  {title:'Total Orders', sub:'1758', img: checklistImage, class:''},
  {title:'Total Sales', sub:'2,636', img: salesImage, class:'warn'},
  {title:'Total Revenue', sub:'$21,596', img: revenueImage, class:'success'},
  {title:'Total Profit', sub:'$1,452', img: profitImage, class:'danger'},
]
</script>


<template>
  <div class="home">
    <h3>Dashboard</h3>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="12" :lg="6" v-for="(item, index) in countCardData" :key="index">
        <div class="card-count" :class="item.class">
          <div class="_info">
            <h6>{{ item.title }}</h6>
            <span>{{ item.sub }}</span>
          </div>
          <em>
            <img :src="item.img" alt="" />
          </em>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :md="12" :lg="16">
        <div class="card-wrapper">
          <el-card class="el chart">
            <template #header>
              <h5>Sales Report</h5>
              <div class="r-side">
                <ul class="chart-list">
                  <li>
                    Online Sales
                  </li>
                  <li class="fade">
                    Offline Sales
                  </li>
                </ul>
                <el-select placeholder="Year" v-model="SalesSelect">
                  <el-option value="2023" label="2023" />
                  <el-option value="2024" label="2024" />
                  <el-option value="2025" label="2025" />
                  <el-option value="2026" label="2026" />
                </el-select>
              </div>
            </template>
            <div class="card-body">
              <img src="@/assets/images/line-chart.png" alt="" />
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24" :md="12" :lg="8">
        <div class="card-wrapper">
          <el-card class="el chart pie">
            <template #header>
              <h5>Categories</h5>
              <div class="r-side">
               <el-select placeholder="Monthly" v-model="CategoriesSelect">
                    <el-option value="Monthly" label="Monthly" />
                    <el-option value="Quarterly" label="Quarterly" />
                    <el-option value="Yearly" label="Yearly" />
                  </el-select>
              </div>
            </template>
            <div class="card-body">
              <img src="@/assets/images/pie-chart.png" alt="" />
              <ul class="chart-list">
                <li class="purple">
                  Devices
                </li>
                <li class="clan">
                  Watches
                </li>
                <li class="warn">
                  Bags
                </li>
                <li class="red">
                  Shoes
                </li>
              </ul>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24" :md="12" :lg="16">
        <div class="card-wrapper">
          <el-card class="el">
            <template #header>
              <h5>Latest Orders</h5>
              <div class="r-side">
                <el-button type="primary" plain size="small">View Orders</el-button>
              </div>
            </template>
            <div class="card-body">
              <div class="table-responsive">
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column sortable prop="orderid" label="Order ID" />
                  <el-table-column sortable prop="customerName" label="Customer Name" />
                  <el-table-column sortable prop="date" label="Date" />
                  <el-table-column sortable prop="price" label="Price" />
                  <el-table-column sortable prop="status" label="Status">
                    <template #default="scope">
                      <div class="status" :class="scope.row.status">{{ scope.row.status }}</div>
                    </template>
                  </el-table-column>
                  <el-table-column label="Action" width="70" align="center">
                    <template #default>
                      <el-button circle class="ic-btn"><img src="@/assets/images/ic-vr-menu.svg" alt="" /></el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <div class="pagination-warpper">
                <div class="_left">
                  <el-select placeholder="5" v-model="LatestSelect">
                    <el-option value="5" label="5" />
                    <el-option value="10" label="10" />
                    <el-option value="15" label="15" />
                    <el-option value="20" label="20" />
                  </el-select>Records per page
                </div>
                <el-pagination layout="prev, pager, next" :total="50" />
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24" :md="12" :lg="8">
        <div class="card-wrapper">
          <el-card class="el">
            <template #header>
              <h5>Top Selling</h5>
              <div class="r-side">
                <el-button type="primary" plain size="small">View Orders</el-button>
              </div>
            </template>
            <div class="card-body">
              <div class="table-responsive">
                <el-table :data="tableData2" style="width: 100%">
                  <el-table-column sortable prop="Product" label="Product" />
                  <el-table-column sortable prop="Sold" label="Sold" width="80"/>
                </el-table>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
