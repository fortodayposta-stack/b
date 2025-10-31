import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Button } from '../../components/ui/button';
import { Upload, X, Plus, AlertTriangle } from 'lucide-react';
import axios from 'axios';
import { allCategories } from '../../mock/allProducts';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AddProduct = () => {
  const { language } = useLanguage();
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    nameRw: '',
    description: '',
    descriptionRw: '',
    category: '',
    image: '',
    regularPrice: '',
    perItemPrice: '',
    poolPrice: '',
    poolSize: '',
    poolCurrent: '',
    rating: '',
  });
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  const content = {
    en: {
      title: 'Add New Product',
      subtitle: 'Submit your product for approval',
      productName: 'Product Name',
      description: 'Product Description',
      category: 'Category',
      selectCategory: 'Select a category',
      regularPrice: 'Regular Price',
      perItemPrice: 'Per Item Price',
      poolPrice: 'Pool Price (Group Buying)',
      poolSize: 'Pool Size',
      poolCurrent: 'Current Pool Participants',
      rating: 'Rating',
      images: 'Product Images',
      addImage: 'Add Image URL',
      removeImage: 'Remove',
      submit: 'Submit for Approval',
      submitting: 'Submitting...',
      success: 'Product submitted successfully! It will be reviewed by admin.',
      error: 'Failed to submit product. Please try again.',
      notSeller: 'Only sellers can add products.',
      imagePlaceholder: 'Enter image URL (e.g., https://example.com/image.jpg)',
    },
    rw: {
      title: 'Ongeraho Igicuruzwa Gishya',
      subtitle: 'Shyira igicuruzwa cyawe kugira ngo cyemezwe',
      productName: 'Izina ry\'Igicuruzwa',
      description: 'Ibisobanuro by\'Igicuruzwa',
      category: 'Icyiciro',
      selectCategory: 'Hitamo icyiciro',
      regularPrice: 'Igiciro Gisanzwe',
      perItemPrice: 'Igiciro ku Kintu',
      poolPrice: 'Igiciro cy\'Itsinda',
      poolSize: 'Ingano y\'Itsinda',
      poolCurrent: 'Abitabiriye Itsinda Kuri ubu',
      rating: 'Icyiciro',
      images: 'Amashusho y\'Igicuruzwa',
      addImage: 'Ongeraho Ishusho',
      removeImage: 'Kuraho',
      submit: 'Shyira kugira ngo Yemezwe',
      submitting: 'Birimo Koherezwa...',
      success: 'Igicuruzwa cyoherejwe neza! Kizasuzumwa na Admin.',
      error: 'Ntibyashobotse kohereza igicuruzwa. Ongera ugerageze.',
      notSeller: 'Abacuruzi gusa bashobora kongeraho ibicuruzwa.',
      imagePlaceholder: 'Shyiramo URL y\'ishusho',
    },
    sw: {
      title: 'Ongeza Bidhaa Mpya',
      subtitle: 'Wasilisha bidhaa yako kwa idhini',
      productName: 'Jina la Bidhaa',
      description: 'Maelezo ya Bidhaa',
      category: 'Kategoria',
      selectCategory: 'Chagua kategoria',
      regularPrice: 'Bei ya Kawaida',
      perItemPrice: 'Bei ya Kila Kitu',
      poolPrice: 'Bei ya Kikundi',
      poolSize: 'Ukubwa wa Kundi',
      poolCurrent: 'Washiriki wa Sasa wa Kundi',
      rating: 'Rating',
      images: 'Picha za Bidhaa',
      addImage: 'Ongeza URL ya Picha',
      removeImage: 'Ondoa',
      submit: 'Wasilisha kwa Idhini',
      submitting: 'Inatuma...',
      success: 'Bidhaa imewasilishwa! Itakaguliwa na msimamizi.',
      error: 'Imeshindwa kuwasilisha bidhaa. Tafadhali jaribu tena.',
      notSeller: 'Wauzaji tu wanaweza kuongeza bidhaa.',
      imagePlaceholder: 'Ingiza URL ya picha',
    },
  };

  const t = content[language];

  React.useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    if (user.account_type !== 'seller') {
      alert(t.notSeller);
      navigate('/');
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addImageUrl = () => {
    setImages([...images, '']);
  };

  const updateImageUrl = (index, value) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const validImages = images.filter(img => img.trim() !== '');
      
      const productData = {
        name: formData.name,
        nameRw: formData.nameRw || formData.name,
        description: formData.description,
        descriptionRw: formData.descriptionRw || formData.description,
        category: formData.category,
        image: formData.image,
        images: validImages,
        regularPrice: parseFloat(formData.regularPrice),
        perItemPrice: parseFloat(formData.perItemPrice),
        poolPrice: parseFloat(formData.poolPrice),
        poolSize: parseInt(formData.poolSize) || 100,
        poolCurrent: parseInt(formData.poolCurrent) || 0,
        rating: parseFloat(formData.rating) || 4.5,
      };

      await axios.post(
        `${API}/seller/products`,
        productData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert(t.success || 'Product submitted successfully!');
      navigate('/seller/products');
    } catch (error) {
      console.error('Error submitting product:', error);
      setError(error.response?.data?.detail || (t.error || 'Failed to submit product.'));
    } finally {
      setLoading(false);
    }
  };

  if (!user || user.account_type !== 'seller') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{t.title}</h1>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product Name */}
              <div>
                <Label htmlFor="name">{t.productName}</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  placeholder={t.productName}
                />
              </div>

              {/* Kinyarwanda Product Name */}
              <div>
                <Label htmlFor="nameRw">Izina ry'Igicuruzwa (Kinyarwanda)</Label>
                <Input
                  id="nameRw"
                  name="nameRw"
                  value={formData.nameRw}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="Izina ry'Igicuruzwa"
                />
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description">{t.description}</Label>
                <Textarea
                  id="description"
                  name="description"
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  placeholder={t.description}
                />
              </div>

              {/* Kinyarwanda Description */}
              <div>
                <Label htmlFor="descriptionRw">Ibisobanuro by'Igicuruzwa (Kinyarwanda)</Label>
                <Textarea
                  id="descriptionRw"
                  name="descriptionRw"
                  rows={5}
                  value={formData.descriptionRw}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="Ibisobanuro by'Igicuruzwa"
                />
              </div>

              {/* Category */}
              <div>
                <Label htmlFor="category">{t.category}</Label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">{t.selectCategory}</option>
                  {allCategories.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {language === 'en' ? cat.name : language === 'rw' ? cat.nameRw : cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Main Image URL */}
              <div>
                <Label htmlFor="image">Main Image URL</Label>
                <Input
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  placeholder="https://example.com/main-image.jpg"
                />
              </div>

              {/* Prices and Pool Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="regularPrice">{t.regularPrice} ($)</Label>
                  <Input
                    id="regularPrice"
                    name="regularPrice"
                    type="number"
                    step="0.01"
                    value={formData.regularPrice}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    placeholder="99.99"
                  />
                </div>
                <div>
                  <Label htmlFor="perItemPrice">{t.perItemPrice} ($)</Label>
                  <Input
                    id="perItemPrice"
                    name="perItemPrice"
                    type="number"
                    step="0.01"
                    value={formData.perItemPrice}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    placeholder="9.99"
                  />
                </div>
                <div>
                  <Label htmlFor="poolPrice">{t.poolPrice} ($)</Label>
                  <Input
                    id="poolPrice"
                    name="poolPrice"
                    type="number"
                    step="0.01"
                    value={formData.poolPrice}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    placeholder="79.99"
                  />
                </div>
                <div>
                  <Label htmlFor="poolSize">{t.poolSize}</Label>
                  <Input
                    id="poolSize"
                    name="poolSize"
                    type="number"
                    value={formData.poolSize}
                    onChange={handleChange}
                    disabled={loading}
                    placeholder="10"
                  />
                </div>
                <div>
                  <Label htmlFor="poolCurrent">{t.poolCurrent}</Label>
                  <Input
                    id="poolCurrent"
                    name="poolCurrent"
                    type="number"
                    value={formData.poolCurrent}
                    onChange={handleChange}
                    disabled={loading}
                    placeholder="0"
                  />
                </div>
                <div>
                  <Label htmlFor="rating">{t.rating}</Label>
                  <Input
                    id="rating"
                    name="rating"
                    type="number"
                    step="0.1"
                    value={formData.rating}
                    onChange={handleChange}
                    disabled={loading}
                    placeholder="4.5"
                  />
                </div>
              </div>

              {/* Images */}
              <div>
                <Label>{t.images}</Label>
                <div className="space-y-3 mt-2">
                  {images.map((img, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={img}
                        onChange={(e) => updateImageUrl(index, e.target.value)}
                        placeholder={t.imagePlaceholder}
                        disabled={loading}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => removeImage(index)}
                        disabled={loading}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={addImageUrl}
                    disabled={loading}
                    className="w-full"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    {t.addImage}
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {language === 'en' 
                    ? 'Add image URLs from sites like Unsplash, Pexels, or your own hosting'
                    : language === 'rw'
                    ? 'Ongeraho URL z\'amashusho kuva kuri Unsplash, Pexels, cyangwa hosting yawe'
                    : 'Ongeza URL za picha kutoka Unsplash, Pexels, au upangishaji wako'}
                </p>
              </div>

              {/* Preview */}
              {images.filter(img => img.trim() !== '').length > 0 && (
                <div>
                  <Label>
                    {language === 'en' ? 'Image Preview' : language === 'rw' ? 'Kureba Amashusho' : 'Onyesho la Picha'}
                  </Label>
                  <div className="grid grid-cols-3 gap-4 mt-2">
                    {images.filter(img => img.trim() !== '').map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg border"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/150?text=Invalid+URL';
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-red-400 mr-3" />
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={loading}
              >
                <Upload className="h-5 w-5 mr-2" />
                {loading ? t.submitting : t.submit}
              </Button>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="text-sm text-yellow-800">
                  {language === 'en'
                    ? '⏳ Your product will be reviewed by the admin before appearing on the marketplace.'
                    : language === 'rw'
                    ? '⏳ Igicuruzwa cyawe kizasuzumwa na Admin mbere yo kugaragara ku isoko.'
                    : '⏳ Bidhaa yako itakaguliwa na msimamizi kabla ya kuonekana kwenye soko.'}
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddProduct;