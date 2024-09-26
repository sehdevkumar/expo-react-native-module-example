package expo.modules.settingspkg

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.core.interfaces.ActivityEventListener
import expo.modules.core.interfaces.LifecycleEventListener
import android.app.Activity
import android.content.Intent
import android.widget.Toast
import android.util.Log
import expo.modules.kotlin.Promise
import expo.modules.kotlin.functions.Queues




val cameraEvents = arrayOf(
  "onOCRCompleted",
  "onViewDestoryed"
)
class SettingsPkgModule : Module()  {

    override fun definition() = ModuleDefinition {
        
        Name("SettingsPkg")
          
        // Expose the native view to JavaScript
        View(CameraActivityView::class) {
            Events(cameraEvents)

                //On props changes launch again the activity expermental 
            OnViewDidUpdateProps { view ->
               view.onPropsHasChaned()
            }

           
           AsyncFunction("startPreview") { view: CameraActivityView ->
             view.startPreview()
           }

           AsyncFunction("closePreview") { view: CameraActivityView ->
            view.closePreview()
          }

           OnViewDestroys { view ->

               Log.d("ViewDestoryed","CameraActivityView has Destoryed")
            
           }

        }
    }
}