package expo.modules.settingspkg



// Define the EmitSignal interface
interface EmitSignal {
    fun postData(data: OCRData)
}

data class OCRData(
    val imageUrl: String,
    val value: String
)

// SignalRegister object for managing the emit signal
object SignalRegister {
    private var emitSignal: EmitSignal? = null

    fun registerSignal(signal: EmitSignal) {
            emitSignal = signal // Register only if not already registered
    }

    fun postSignal(data: OCRData) {
        emitSignal?.postData(data) // Safe call to avoid null pointer exception
    }

    fun clean() {
        emitSignal = null // Reset emitSignal to null
    }
}

