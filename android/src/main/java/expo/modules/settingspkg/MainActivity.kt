package expo.modules.settingspkg

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity
import com.prashd.snacky.Snacky
import expo.modules.settingspkg.SignalRegister
import expo.modules.settingspkg.OCRData




class MainActivity : AppCompatActivity() {

    

    private val TEST_ACTIVITY_REQUEST_CODE = 1001

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val rootView: View = findViewById(R.id.rootView)

        val button = findViewById<Button>(R.id.btn_snackbar)

         
    button.setOnClickListener{
            try {
                val intent = Intent(this, Class.forName("com.prashd.snacky.TestActivity"))

                startActivityForResult(intent, TEST_ACTIVITY_REQUEST_CODE)

            } catch (e: ClassNotFoundException) {
                Log.e("ERROR", "Class not found", e)
            }
    }
    }


    @Deprecated("Deprecated in Java")
    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        if (requestCode == TEST_ACTIVITY_REQUEST_CODE) {
            if (resultCode == Activity.RESULT_OK) {
                val result = data?.getStringExtra("status")   
             
                Snacky.showSnackbar(findViewById(R.id.rootView), "Result: $result")
                // val signalData = MySignalData(imagePath = "path/to/image.png", value = "Some Value")
                val data = OCRData(
                imageUrl = "https://example.com/image.jpg",
                value = "I do not know"
                )

                try {
                // Log the data before sending it to postSignal
                Log.d("SignalRegister", "Data being posted: ${data.imageUrl}, ${data.value}")

                SignalRegister.postSignal(data)
                } catch (e: Exception) {
                // Log the specific error to understand what's going wrong
                Log.e("SignalRegisterError", "Error in postSignal: ${e.localizedMessage}", e)
                }

            }
        }
    }
}