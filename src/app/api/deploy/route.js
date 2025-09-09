export async function GET() {
  return Response.json({ 
    message: "デプロイ成功！",
    status: "success" 
  });
}