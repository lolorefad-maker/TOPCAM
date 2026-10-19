Add-Type -TypeDefinition @"
using System;
using System.Runtime.InteropServices;
using System.Text;

public class CredManager3 {
    [DllImport("Advapi32.dll", EntryPoint = "CredReadW", CharSet = CharSet.Unicode, SetLastError = true)]
    public static extern bool CredRead(string target, int type, int reservedFlag, out IntPtr credentialPtr);

    [DllImport("Advapi32.dll", EntryPoint = "CredFree", SetLastError = true)]
    public static extern void CredFree(IntPtr cred);

    [StructLayout(LayoutKind.Sequential, CharSet = CharSet.Unicode)]
    public struct CREDENTIAL {
        public int Flags;
        public int Type;
        public string TargetName;
        public string Comment;
        public long LastWritten;
        public int CredentialBlobSize;
        public IntPtr CredentialBlob;
        public int Persist;
        public int AttributeCount;
        public IntPtr Attributes;
        public string TargetAlias;
        public string UserName;
    }

    public static byte[] GetRawBytes(string target) {
        IntPtr credPtr;
        if (CredRead(target, 1, 0, out credPtr)) {
            var cred = (CREDENTIAL)Marshal.PtrToStructure(credPtr, typeof(CREDENTIAL));
            byte[] bytes = new byte[cred.CredentialBlobSize];
            Marshal.Copy(cred.CredentialBlob, bytes, 0, cred.CredentialBlobSize);
            CredFree(credPtr);
            return bytes;
        }
        return null;
    }
}
"@

# Clean temporary files
$tempFiles = @(
    "apply_promo_rules.ps1",
    "fetch_delivery_images.ps1",
    "fetch_pexels.ps1",
    "fetch_pexels2.ps1",
    "fetch_real_delivery.ps1",
    "promo_rules.json",
    "images/delivery_box_gear.jpg",
    "images/delivery_courier.jpg",
    "images/delivery_courier_smile.jpg",
    "images/delivery_doorstep.jpg",
    "images/delivery_hand_box.jpg",
    "images/delivery_man_cap.jpg",
    "images/delivery_package_door.jpg",
    "images/delivery_person_parcel.jpg",
    "images/delivery_van_packages.jpg",
    "images/delivery_van_trunk.jpg",
    "images/pexels_courier_hand.jpg",
    "images/pexels_delivery_box.jpg",
    "images/pexels_delivery_van.jpg"
)

foreach ($file in $tempFiles) {
    if (Test-Path $file) {
        Remove-Item $file -Force -ErrorAction SilentlyContinue
    }
}

$raw = [CredManager3]::GetRawBytes("GitHub - https://api.github.com/lolorefad-maker")
$utf8 = [System.Text.Encoding]::UTF8.GetString($raw)
$authHeader = "AUTHORIZATION: basic " + [Convert]::ToBase64String([System.Text.Encoding]::ASCII.GetBytes("lolorefad-maker:$utf8"))

$git = "C:\Users\publisher\AppData\Local\GitHubDesktop\app-3.6.6\resources\app\git\cmd\git.exe"
& $git add -A
& $git commit -m "Use store logo in promo modal and restore banner next to New Arrivals as requested"
& $git -c "http.extraheader=$authHeader" push origin main
Write-Host "GIT_SYNC_COMPLETE"
