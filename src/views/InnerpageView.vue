

<script setup>
import FloatLabelTextbox from '@/components/FloatLabelTextbox.vue'
import UploadFile from '@/components/UploadFile.vue';
import { ref } from 'vue'
const checkList = ref(['selected and disabled'])
const radio = ref(['5'])

// tabs
const activeName = ref('first')
const SalesSelect = ref('Option1')

// images
import IcShow from '@/assets/images/ic-show.svg';
import IcSearch from '@/assets/images/ic-search.svg';

</script>

<template>
  <div>
    <h3>Inner Page</h3>
    <el-card class="el">
      <template #header>
        <h5>Form Control</h5>
      </template>
      <div class="card-body">
        <div class="element">
          <h6>One Column</h6>
          <FloatLabelTextbox text="Label" />
          <FloatLabelTextbox text="Label" />
          <FloatLabelTextbox text="Label" type="textarea" />
        </div>

        <div class="element">
          <h6>Two Column</h6>
          <el-row :gutter="32">
            <el-col :xs="24" :sm="12">
              <FloatLabelTextbox text="Label" />
            </el-col>
            <el-col :xs="24" :sm="12">
              <div class="form-group">
               <el-select placeholder="Year" v-model="SalesSelect" class="w-100"> 
                  <el-option value="Option1" label="Option1" />
                  <el-option value="Option2" label="Option2" />
                  <el-option value="Option3" label="Option3" />
                  <el-option value="Option4" label="Option4" />
                </el-select>
                </div>
            </el-col>
            <el-col :xs="24" :sm="12">
              <FloatLabelTextbox text="Label" append="true" :icon="IcShow"/>
            </el-col>
            <el-col :xs="24" :sm="12">
              <FloatLabelTextbox text="Label" prepend="true" :icon="IcSearch"/>
            </el-col>
          </el-row>
        </div>

        <div class="element">
          <h6>Three Column</h6>
          <el-row :gutter="32">
            <el-col :xs="24" :sm="12" :md="8">
              <FloatLabelTextbox text="Label" />
            </el-col>
            <el-col :xs="24" :sm="12" :md="8">
              <FloatLabelTextbox text="Label" />
            </el-col>
            <el-col :xs="24" :sm="12" :md="8">
              <FloatLabelTextbox text="Label" append="true" />
            </el-col>
            <el-col :xs="24" :sm="12" :md="8">
              <FloatLabelTextbox text="Label" />
            </el-col>
            <el-col :xs="24" :sm="12" :md="8">
              <FloatLabelTextbox text="Label" />
            </el-col>
            <el-col :xs="24" :sm="12" :md="8">
              <FloatLabelTextbox text="Label" error="This is Error"/>
            </el-col>
          </el-row>
        </div>

        <div class="element">
          <h6>Four Column</h6>
          <el-row :gutter="32">
            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <FloatLabelTextbox text="Label" />
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <FloatLabelTextbox text="Label" />
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <FloatLabelTextbox text="Label" append="true" />
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <FloatLabelTextbox text="Label" />
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <FloatLabelTextbox text="Label" />
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <FloatLabelTextbox text="Label" />
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <FloatLabelTextbox text="Label" />
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6">
                <FloatLabelTextbox text="Label" error="This is Error"/>
            </el-col>
          </el-row>
        </div>
        <div class="element">
        <h5>Other Form Elements</h5>
          
           <h6>File Upload</h6>
           <UploadFile/>
           
          </div>
          <div class="element">
          <h6>Checkbox</h6>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="Option A" />
            <el-checkbox label="Option B" />
            <el-checkbox label="Option C" />
            <el-checkbox label="disabled" disabled />
            <el-checkbox label="selected and disabled" disabled />
          </el-checkbox-group>
          
        </div>
        <div class="element">
          <h6>Radio</h6>
          <el-radio-group v-model="radio">
            <el-radio :label="1">Option A</el-radio>
            <el-radio :label="2">Option B</el-radio>
            <el-radio :label="3">Option C</el-radio>
            <el-radio :label="4" disabled>disabled</el-radio>
          </el-radio-group>
        </div>
  <div class="element">
    
          <h6>Button</h6>
          <el-row class="mb-4">
            <el-button type="primary">Primary</el-button>
            <el-button type="primary" plain>Secondary</el-button>
          </el-row>


        </div>

        <div class="element">
          <h6>Snackbar</h6>
          <el-row :gutter="32">
            <el-col :xs="24" :sm="12">
              <div class="form-group">
                <el-alert title="This is a success message" type="success" />
              </div>
            </el-col>
            <el-col :xs="24" :sm="12">
              <div class="form-group">
                <el-alert title="This is a info message" type="info" />
              </div>
            </el-col>
            <el-col :xs="24" :sm="12">
              <div class="form-group">
                <el-alert title="This is a warning message" type="warning" />
              </div>
            </el-col>
            <el-col :xs="24" :sm="12">
              <div class="form-group">
                <el-alert title="This is a error message" type="error" />
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="element">
          <h6>Tabs</h6>
          <el-tabs v-model="activeName" class="Label-tabs">
            <el-tab-pane label="Tab1" name="first">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum nisi, cras non congue amet, eu interdum. Purus vulputate odio eget curabitur porttitor tempus ipsum. Amet risus aenean tortor sed lacus, nunc. Velit semper ullamcorper at tortor pellentesque augue vehicula sed viverra. Quam sit adipiscing egestas etiam nunc adipiscing non luctus cursus. Pretium nunc, scelerisque mauris aliquet vulputate erat. Sem condimentum nullam pharetra ac sagittis. Vel nulla sed in pharetra. Sit mauris id id nascetur. Sem gravida euismod ac convallis.</el-tab-pane>
            <el-tab-pane label="Tab2" name="second">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum nisi, cras non congue amet, eu interdum. Purus vulputate odio eget curabitur porttitor tempus ipsum. Amet risus aenean tortor sed lacus, nunc. Velit semper ullamcorper at tortor pellentesque augue vehicula sed viverra. Quam sit adipiscing egestas etiam nunc adipiscing non luctus cursus. Pretium nunc, scelerisque mauris aliquet vulputate erat. Sem condimentum nullam pharetra ac sagittis. Vel nulla sed in pharetra. Sit mauris id id nascetur. Sem gravida euismod ac convallis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum nisi, cras non congue amet, eu interdum. Purus vulputate odio eget curabitur porttitor tempus ipsum. Amet risus aenean tortor sed lacus, nunc. Velit semper ullamcorper at tortor pellentesque augue vehicula sed viverra. Quam sit adipiscing egestas etiam nunc adipiscing non luctus cursus. Pretium nunc, scelerisque mauris aliquet vulputate erat. Sem condimentum nullam pharetra ac sagittis. Vel nulla sed in pharetra. Sit mauris id id nascetur. Sem gravida euismod ac convallis.</el-tab-pane>
            <el-tab-pane label="Tab3" name="third"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum nisi, cras non congue amet, eu interdum. Purus vulputate odio eget curabitur porttitor tempus ipsum. Amet risus aenean tortor sed lacus, nunc. Velit semper ullamcorper at tortor pellentesque augue vehicula sed viverra. Quam sit adipiscing egestas etiam nunc adipiscing non luctus cursus. Pretium nunc, scelerisque mauris aliquet vulputate erat. Sem condimentum nullam pharetra ac sagittis. Vel nulla sed in pharetra. Sit mauris id id nascetur. Sem gravida euismod ac convallis.</p></el-tab-pane>
            <el-tab-pane label="Tab4" name="fourth"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum nisi, cras non congue amet, eu interdum. Purus vulputate odio eget curabitur porttitor tempus ipsum. Amet risus aenean tortor sed lacus, nunc. Velit semper ullamcorper at tortor pellentesque augue vehicula sed viverra. Quam sit adipiscing egestas etiam nunc adipiscing non luctus cursus. Pretium nunc, scelerisque mauris aliquet vulputate erat. Sem condimentum nullam pharetra ac sagittis. Vel nulla sed in pharetra. Sit mauris id id nascetur. Sem gravida euismod ac convallis.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum nisi, cras non congue amet, eu interdum. Purus vulputate odio eget curabitur porttitor tempus ipsum. Amet risus aenean tortor sed lacus, nunc. Velit semper ullamcorper at tortor pellentesque augue vehicula sed viverra. Quam sit adipiscing egestas etiam nunc adipiscing non luctus cursus. Pretium nunc, scelerisque mauris aliquet vulputate erat. Sem condimentum nullam pharetra ac sagittis. Vel nulla sed in pharetra. Sit mauris id id nascetur. Sem gravida euismod ac convallis.</p></el-tab-pane>
          </el-tabs>
        </div>

      </div>
    </el-card>
  </div>
</template>
