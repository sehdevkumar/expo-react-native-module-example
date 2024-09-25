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




val cameraEvents = arrayOf(
  "onOCRCompleted"
)
class SettingsPkgModule : Module()  {

    override fun definition() = ModuleDefinition {
        Name("SettingsPkg")
          
         Function("hello") {
            "Hello world! 👋"
         }
        
        // Expose the native view to JavaScript
        View(CameraActivityView::class) {
           Events(cameraEvents)
            // Define props that can be passed from JavaScript to the native vie
        }
    }
}