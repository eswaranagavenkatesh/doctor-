#!/bin/bash
# Build and Deploy Script for Vishakaha Multispeciality Clinic
# This script automates the build process for production deployment

echo "🏥 Vishakaha Multispeciality Clinic - Build Script"
echo "=================================================="
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies"
        exit 1
    fi
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "🧹 Cleaning previous build..."
rm -rf dist/

echo ""
echo "🔨 Building production bundle..."
npm run build

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi

echo ""
echo "✅ Build completed successfully!"
echo ""
echo "📁 Build output: dist/"
echo ""
echo "📋 Next Steps:"
echo "1. Navigate to dist/ folder"
echo "2. Upload ALL files to Hostinger public_html/"
echo "3. Verify .htaccess file is present"
echo "4. Test website: https://visakhamultispeciality.com"
echo ""
echo "📖 For detailed instructions, see: HOSTINGER_DEPLOYMENT_GUIDE.md"
echo ""

# Optional: Open dist folder in file explorer
# Uncomment the line below for your OS:
# open dist/           # macOS
# explorer dist/       # Windows
# xdg-open dist/       # Linux

echo "🎉 Ready to deploy!"
