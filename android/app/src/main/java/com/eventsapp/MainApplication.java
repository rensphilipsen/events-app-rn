package nl.socialbrothers.eventsapp;

import android.app.Application;

import com.facebook.react.ReactApplication;
import io.invertase.firebase.RNFirebasePackage;
import com.geektime.rnonesignalandroid.ReactNativeOneSignalPackage;
import org.reactnative.camera.RNCameraPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import io.invertase.firebase.fabric.crashlytics.RNFirebaseCrashlyticsPackage;
import com.crashlytics.android.Crashlytics;
import io.fabric.sdk.android.Fabric;
import io.invertase.firebase.auth.RNFirebaseAuthPackage

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNFirebasePackage(),
            new ReactNativeOneSignalPackage(),
            new RNCameraPackage(),
            new SplashScreenReactPackage(),
            new VectorIconsPackage(),
            new ReactNativeConfigPackage(),
            new RNFirebaseCrashlyticsPackage(),
            new RNFirebaseAuthPackage(),
            new RNFirebaseDatabasePackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    Fabric.with(this, new Crashlytics());
    SoLoader.init(this, /* native exopackage */ false);
  }
}
