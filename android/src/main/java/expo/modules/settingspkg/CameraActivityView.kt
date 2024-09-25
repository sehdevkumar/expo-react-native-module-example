
package expo.modules.settingspkg

import android.content.Context
import android.content.Intent
import android.util.Log
import expo.modules.kotlin.AppContext
import expo.modules.kotlin.views.ExpoView
import expo.modules.kotlin.activityresult.AppContextActivityResultRegistry
import expo.modules.kotlin.activityresult.AppContextActivityResultContract
import expo.modules.kotlin.activityresult.AppContextActivityResultFallbackCallback
import expo.modules.settingspkg.MainActivity
import expo.modules.kotlin.viewevent.EventDispatcher
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap

import expo.modules.settingspkg.SignalRegister
import expo.modules.settingspkg.EmitSignal
import expo.modules.settingspkg.OCRData
import expo.modules.kotlin.events.EventEmitter


import com.prashd.snacky.Snacky



class CameraActivityView(context: Context, appContext: AppContext) : ExpoView(context, appContext) ,EmitSignal  {

 private val onOCRCompleted by EventDispatcher<Unit>()

   

companion object {
    const val REQUEST_CODE = 1001
    const val RESULT_OK = -1 // Android's standard RESULT_OK
}

init {
        
         launchMainActivity()
}


fun launchMainActivity() {
   
    val mainIntent = Intent(context, MainActivity::class.java)
    context?.let {
         SignalRegister.registerSignal(this);
        appContext.currentActivity?.startActivityForResult(mainIntent, REQUEST_CODE)
    }

}

// Convert OCRData to Map<String, String>
fun convertOCRDataToMap(data: OCRData): Map<String, String> {
    return mapOf(
        "imageUrl" to data.imageUrl,
        "value" to data.value
    )
}

override fun postData(data: OCRData) {

    try {
        Log.d("postData", "Received OCRData: ${data.imageUrl}, ${data.value}")
        // Dispatch the event with the custom map
        // val dataMap = convertOCRDataToMap(data)
        onOCRCompleted?.invoke(Unit)
        // Invoke the event with the map data
        Log.d("NowOk", "ok")
        SignalRegister?.clean()
    } catch (e: Exception) {
        Log.e("postDataError", "Error posting data: ${e.localizedMessage}")
    }
}
}



