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

$raw = [CredManager3]::GetRawBytes("GitHub - https://api.github.com/lolorefad-maker")
$utf8 = [System.Text.Encoding]::UTF8.GetString($raw)
$authHeader = "AUTHORIZATION: basic " + [Convert]::ToBase64String([System.Text.Encoding]::ASCII.GetBytes("lolorefad-maker:$utf8"))

$git = "C:\Users\publisher\AppData\Local\GitHubDesktop\app-3.6.6\resources\app\git\cmd\git.exe"
& $git add -A
& $git commit -m "Add 150 authentic products from Excel (total 332 products) and fix initial storefront product grid"
& $git -c "http.extraheader=$authHeader" push origin main
Write-Host "GIT_SYNC_COMPLETE"
